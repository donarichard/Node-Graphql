import { createModule } from 'graphql-modules';
import { join } from 'path'
import { buildSchema } from '../../utils/buildSchema'

const getMessageSchema = async () => {
	const messageSchema = await buildSchema({
		typeDefsPath: [join(__dirname, 'typedefs', '**/*.graphql')],
		resolverPath: [join(__dirname, 'resolvers', '**/*.{ts,js}'), '!./**/*.d.ts'],
		permissions: {}
	})

	return createModule({
		id: 'messages',
		dirname: __dirname,
		typeDefs: [messageSchema.typeDefs],
		resolvers: [messageSchema.resolvers]
	});
}

export { getMessageSchema }
