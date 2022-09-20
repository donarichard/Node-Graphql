import { getConversationSchema } from "../modules/conversations"
import { getMessageSchema } from "../modules/messages"
import { merge } from "lodash"
import { mergeTypes } from "merge-graphql-schemas"
import { createApplication } from 'graphql-modules';
import { getUserSchema } from "../modules/users"

/**
 * To generate apollp schema
 * @returns typedef and resolvers
 */
export const application = async () => {
    const user = await getUserSchema()
    const message = await getMessageSchema()
    const conversation = await getConversationSchema()

    return createApplication({
        modules: [user, message,conversation ],
    }).createSchemaForApollo();
}