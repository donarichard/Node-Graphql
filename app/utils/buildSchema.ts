import { loadResolversFilesAsync, loadSchemaFilesAsync } from '@graphql-toolkit/file-loading'
import { DocumentNode } from 'graphql'
import gql from 'graphql-tag'
import { merge } from 'lodash'
import { GraphQLResolverMap } from 'apollo-graphql'
import { mergeTypes } from 'merge-graphql-schemas'

export interface BuildSchemaOptions {
	typeDefsPath: string | string[]
	resolverPath: string | string[]
	prefix?: string
	permissions: object
}

export type ServiceReturnType = {
	resolvers?: GraphQLResolverMap<any>
	typeDefs?: any
	permissions: object
}
export const buildSchema = async ({
	typeDefsPath,
	resolverPath,
	permissions,
}: BuildSchemaOptions): Promise<ServiceReturnType> => {
	const resolvers = await loadResolversFilesAsync(resolverPath).then((results) => results.flat())
	const typeDefs: DocumentNode = await loadSchemaFilesAsync(typeDefsPath)
		.then((results) => results.join('\n'))
		.then((raw) => gql(raw))

	const mergedResolver = [...resolvers].reduce(
		(results, value) => merge(results, value),
	)

	const mergedTypes = mergeTypes([typeDefs], { all: true })
	return {
		typeDefs: gql(mergedTypes),
		resolvers: mergedResolver,
		permissions,
	}
}