import { NewMessageInput } from "../../../generate/typedef";
import { Conversations } from "../../../models/Conversation";
import { ConversationsUsers } from "../../../models/ConversationUser";
import { Messages } from "../../../models/Messages";


export const createMessage = async (context: any, input: NewMessageInput) => {
    const conversation = await Conversations.find({
        $and: [
            {
                memeber: {
                    $in: [context.user.id]
                }
            },
            {
                memeber: {
                    $in: [input.userId]
                }
            },

        ]
    })

    if (conversation && conversation.length > 0) {
        const newMessage = new Messages({
            conversation_id: conversation[0]._id,
            author_id: context.user._id,
            content: input.content
        })
        await newMessage.save()
        const checkConversationExixst = await ConversationsUsers.find({
            user_id: input.userId,
            conversation_id: conversation[0]._id,
        }).lean()
        if (checkConversationExixst && checkConversationExixst.length > 0) {
            await ConversationsUsers.findOneAndUpdate({
                conversation_id: conversation[0]._id,
                user_id: input.userId
            }, {
                $inc: {
                    un_read_messages: 1
                }
            })
        } else {
            await new ConversationsUsers({
                user_id: input.userId,
                conversation_id: conversation[0]._id,
                un_read_messages: 1
            }).save()
        }

        context.pubsub.publish('NEW_MESSAGES')
        return {
            status: 200,
            StatusCode: 'ok',
            message: "Message added successfully",
            conversation: conversation[0]
        }
    } else {
        const newConversation = new Conversations({
            memeber: [context.user._id, input.userId],
        })
        const savedConversation = await newConversation.save();
        const newMessage = new Messages({
            conversation_id: savedConversation._id,
            author_id: context.user._id,
            content: input.content
        })
        await newMessage.save()

        context.pubsub.publish('NEW_MESSAGES')
        await new ConversationsUsers({
            user_id: input.userId,
            conversation_id: newConversation._id,
            un_read_messages: 1
        }).save()
        return {
            status: 200,
            StatusCode: 'ok',
            message: "Message added successfully",
            conversation: savedConversation
        }
    }
}