import { createModule } from 'graphql-modules';
import { join } from 'path'
import { buildSchema } from '../../utils/buildSchema'

const getConversationSchema = async () => {
	const conversationSchema = await  buildSchema({
		typeDefsPath: [join(__dirname, 'typedefs', '**/*.graphql')],
		resolverPath: [join(__dirname, 'resolvers', '**/*.{ts,js}'), '!./**/*.d.ts'],
		permissions:{}
	})
    return createModule({
		id: 'conversation',
		dirname: __dirname,
		typeDefs: [conversationSchema.typeDefs],
		resolvers: [conversationSchema.resolvers]
	});
}

export { getConversationSchema }
