import { Messages } from "../../../models/Messages";
import { ConversationResolvers, QueryResolvers, SubscriptionResolvers } from "../../../generate/typedef";
import { getConversationById, getConversationByUser, getMyConversation } from "../controllers/conversations";
import { ConversationsUsers } from "../../../models/ConversationUser";

var currentContext:any;

export const Conversation: ConversationResolvers = {
    messages: async (parent, args) => {
        let { offset, limit } = args
        const count = await Messages.find({
            conversation_id: parent._id
        }).count({})
        const messages = await Messages.find({
            conversation_id: parent._id
        }).populate('author_id').limit(limit).skip(offset).sort({
            createdAt: 'descending'
        })
        return {
            pagination: {
                limit: limit,
                offset: offset,
                total: count || 0
            },
            messages
        }
    },
    un_read_messages: async (parent, args, context) => {
        const conversationUser = await ConversationsUsers.find({
            conversation_id: parent._id,
            user_id: context.user._id
        })
        return (conversationUser && conversationUser.length > 0) ? conversationUser[0].un_read_messages : 0
    }
}



export const Query: QueryResolvers = {

    myconversation: async (_parent, args, context, _info) => {
        return await getMyConversation(context, args)
    },
    openConversation: async (_parent, {conversatin_id}, context, _info) => {
        return await getConversationById(context, conversatin_id)
    },
    openConversationByUserId: async (_parent, {user_id}, context, _info) => {
        const conversation =  await getConversationByUser(context, user_id)
        if(conversation && conversation.length>0){
            return conversation[0]
        }
    }
}

export const Subscription: SubscriptionResolvers = {
    myconversation: {
        subscribe: async (_: any, args: any, { pubsub }: any, context:any) => {
            return pubsub.asyncIterator('NEW_MESSAGES')
        },
        resolve: async (payload: any, args: any, context: any, info: any) => {
            currentContext = context
            const myconversation = await getMyConversation(context, args)
            return myconversation
        }
    },
    openConversation: {
        subscribe: async (_: any, args: any, { pubsub }: any, context:any) => {
            return pubsub.asyncIterator('NEW_MESSAGES')
        },
        resolve: async (payload: any, {conversatin_id}: any, context: any, info: any) => {
            currentContext = context
            const myconversation = await getConversationById(context, conversatin_id)
            return myconversation
        }
    },
}