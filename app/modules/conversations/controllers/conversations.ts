import { ConversationsUsers } from "../../../models/ConversationUser";
import { MarkAsReadMutationResponse, QueryMyconversationArgs } from "../../../generate/typedef";
import { Conversations } from "../../../models/Conversation";

/**
 * 
 * @param context 
 * @param args input of my conversation
 * @returns conversation
 */

export const getMyConversation = async (context: any, args: QueryMyconversationArgs) => {
    const limit = args.limit || 5
    const offset = args.offset || 0
    const count = await Conversations.find({
        $or: [
            {
                memeber: {
                    $in: [context.user.id]
                }
            },

        ]
    }).count({})
    const conversations = await Conversations.find({
        $or: [
            {
                memeber: {
                    $in: [context.user.id]
                }
            },

        ]
    }).populate('memeber').limit(limit).skip(offset).sort({
        createdAt: 'descending'
    })
    return {
        pagination: {
            limit: limit,
            offset: offset,
            total: count || 0
        },
        conversations
    }
}

/**
 * 
 * @param context contex of the application
 * @param id conversation id
 * @returns conversation
 */

export const getConversationById = async (context: any, id: any) => {
    const conversation = await Conversations.findById(id).populate('memeber')
    return conversation
}

/**
 * 
 * @param context contex of the application
 * @param id conversation id
 * @returns conversation
 */

export const getConversationByUser = async (context: any, user_id: any) => {
    const conversation = await Conversations.find({
        $and: [
            {
                memeber: {
                    $in: [context.user.id]
                }
            },
            {
                memeber: {
                    $in: [user_id]
                }
            },

        ]
    }).populate('memeber')
    return conversation
}


/**
 * 
 * @param context 
 * @param id conversation id
 * @returns conversation 
 */

export const markAsReadConversion = async (context: any, id: any): Promise<MarkAsReadMutationResponse> => {
    try {
        const conversation = await Conversations.findById(id)
        if (conversation) {
            await ConversationsUsers.find({
                user_id: context.user._id,
                conversation_id: id,
            }).update({
                $set: {
                    un_read_messages: 0
                }
            })
            return {
                status: 200,
                StatusCode: 'ok',
                message: "Successfully updated the conversation status",
            }
        } else {
            return {
                status: 404,
                StatusCode: 'Not Found',
                message: "Conversation not found",
            }
        }
    } catch (error) {
        throw error
    }

}