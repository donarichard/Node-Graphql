import { join } from 'path'
import { buildSchema } from '../../utils/buildSchema'
import { createModule } from 'graphql-modules';

const getUserSchema = async () => {
	const userSchema = await buildSchema({
		typeDefsPath: [join(__dirname, 'typedefs', '**/*.graphql')],
		resolverPath: [join(__dirname, 'resolvers', '**/*.{ts,js}'), '!./**/*.d.ts'],
		permissions: {}
	})
	return createModule({
		id: 'users',
		dirname: __dirname,
		typeDefs: [userSchema.typeDefs],
		resolvers: [userSchema.resolvers]
	});
}

export { getUserSchema }
