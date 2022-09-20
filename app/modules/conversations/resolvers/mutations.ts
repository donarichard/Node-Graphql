import { MutationResolvers } from "../../../generate/typedef"
import { markAsReadConversion } from "../controllers/conversations"


/**
 * Mutation for the conversation modules
 */
export const Mutation: MutationResolvers = {
    markAsReadConversion: async (_parent: any, { conversatin_id }: any, context) => {
        return markAsReadConversion(context, conversatin_id)
    }
}