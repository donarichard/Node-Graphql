import { createMessage } from "../../../modules/messages/controllers/messages";
import { LoginMutationResponse, MutationResolvers, RegisterMutationResponse } from "../../../generate/typedef";
import { loginUser, registerUser } from "../controllers/users";
/**
 * Mutation for the user modules
 */
export const Mutation: MutationResolvers = {
    register: async (_parent: any, {input}: any): Promise<RegisterMutationResponse>=> {
        return await registerUser(input)
    },
    login : async (_parent: any, {input}: any) =>{
        return await loginUser(input)
    },
    // createMessage: async (_parent: any, args: any, context) => {
    //     console.log(args)
    //     return createMessage(context, args)
    // }
}