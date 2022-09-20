import { getConversationByUser } from "../../../modules/conversations/controllers/conversations";
import { QueryResolvers, SubscriptionResolvers, UserResolvers } from "../../../generate/typedef";
import { allUsers, currentUser } from "../controllers/users";

export const User: UserResolvers = {
    conversation: async (_parent, args, context, _info) => {
        const conversation =  await getConversationByUser(context, _parent._id)
        if(conversation && conversation.length>0){
            return conversation[0]
        }
    },
}

export const Query: QueryResolvers = {
    me: async (_parent, args, context, _info) => {
        return await currentUser(context)
    },
    getAllUsers: async (_parent, args, context, _info) => {
        return await allUsers(context, args)
    },
}

