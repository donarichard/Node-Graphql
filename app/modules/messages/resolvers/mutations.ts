import { MutationResolvers } from "../../../generate/typedef"
import { createMessage } from "../controllers/messages"


/**
 * Mutation for the message modules
 */
export const Mutation: MutationResolvers = {
    createMessage: async (_parent: any, {input}: any, context) => {
        console.log("args", input)
        return createMessage(context, input)
    }
}