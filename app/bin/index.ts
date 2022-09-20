import { makeExecutableSchema } from '@graphql-tools/schema';
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer, AuthenticationError } from "apollo-server-express";
import * as dotenv from 'dotenv';
import express from 'express';
import { execute, subscribe } from 'graphql';
import { PubSub } from 'graphql-subscriptions';
import { createServer } from 'http';
import { lastLoginIp, lastSeendStatus } from '../utils/getIpV4';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { logger, requestDevLogger } from "../logger";
import { verifyUser } from "../utils/tokenHandler";
import { application } from '../schemas';
dotenv.config();
require('../database');
// Express APP
export const app = express();
// HTTP Strict Transport Security
app.use((req, res, next)=> {
    res.set('Strict-Transport-Security', 'max-age=31536000');
    next();
});
// Setup HTTP server for subscription
export const httpServer = createServer(app);
//Return Express server with GraphQL config
export const startServer = async () => {
    const pubsub = new PubSub();
    const schema = await application();
    const apolloServer = new ApolloServer({
        csrfPrevention: true,
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground(),
            requestDevLogger
        ],
        schema,
        context: async ({ req, res }) => {
            let user;
            try {
                const token = req.headers.authorization || '';
                if (token) {
                    user = await verifyUser(token);
                    if (!user) throw new AuthenticationError('Please logged in to continue');
                    await lastLoginIp(user, req.ip, true)
                }
            } catch (err) {
                logger.error(err)
            }
            return ({ req, res, pubsub, user })
        },
        introspection: true,


    });


    await apolloServer.start();
    apolloServer.applyMiddleware({ app, path: '/' });
    // TO setup subscription server
    await SubscriptionServer.create({
        // This is the `schema` we just created.
        schema,
        // These are imported from `graphql`.
        execute,
        subscribe,
        // Providing `onConnect` is the `SubscriptionServer` equivalent to the
        // `context` function in `ApolloServer`. Please [see the docs](https://github.com/apollographql/subscriptions-transport-ws#constructoroptions-socketoptions--socketserver)
        // for more information on this hook.
        async onConnect(
            connectionParams: any,
            webSocket: any,
            context: any
        ) {
            console.log('connected!!')
            let user: any;
            try {
                const token = connectionParams.authorization || '';
                if (token) {
                    user = await verifyUser(token);
                    await lastSeendStatus(user.id,  true)
                    if (!user) throw new AuthenticationError('Please logged in to continue');
                }
            } catch (err) {
                logger.error(err)
            }
            // If an object is returned here, it will be passed as the `context`
            // argument to your subscription resolvers.
            console.log('connected!!')
            return {
                pubsub,
                user
            }
        },
        onDisconnect: async (_: any, context: any) => {
            const initialContext = await context.initPromise;
            if (initialContext && initialContext.user) {
                await lastSeendStatus(initialContext.user.id,  false)
            }
        }
    }, {
        // This is the `httpServer` we created in a previous step.
        server: httpServer,
        // This `server` is the instance returned from `new ApolloServer`.
        path: apolloServer.graphqlPath,
    });
    httpServer.listen(process.env.PORT, () => {
        logger.info(`🚀 Server is running at http://localhost:${process.env.PORT} 🚀`);
        console.log(`🚀 Server is running at http://localhost:${process.env.PORT} 🚀`)
    });
    return app
}

module.exports = {
    startServer,
    httpServer,
    app
}
