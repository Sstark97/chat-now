import { createContext } from "react"
import { createClient, PostgrestSingleResponse } from "@supabase/supabase-js"
import * as process from "process"
import type { ChildrenProps } from "@customTypes/global"
import type { RealTimeContext } from "@customTypes/context"
import type { Chats } from "@customTypes/domain"

const RealTimeContext = createContext<RealTimeContext>({} as RealTimeContext)

/**
 * Este componente es el encargado de proveer el contexto de la aplicación
 * @param {ChildrenProps} { children } - children: componente a mostrar
 * @returns component
 * @example <ChatProvider>children</ChatProvider>
 */
const RealTimeProvider = ({ children }: ChildrenProps) => {
    const { Provider } = RealTimeContext
    const supabase = createClient(
        process.env.NEXT_PUBLIC_REAL_TIME_URL as string,
        process.env.NEXT_PUBLIC_REAL_TIME_API_KEY as string,
        {
            realtime: {
                params: {
                    eventsPerSecond: 10,
                },
            },
        }
    )

    const getAllChats = async (id: string): Promise<PostgrestSingleResponse<Chats[]>> => {
        // get all chats where the current user is a member and the receiver and sender are unique

        return supabase.from("ChatUsers").select("chat_id").eq("user_id", id)
    }

    const getChatIdFrom = async (userId: string, contactId: string) => {
        const chatsFromUser = await getAllChats(userId)
        const chatsFromContact = await getAllChats(contactId)

        if (chatsFromUser.data && chatsFromContact.data) {
            return chatsFromUser.data.find((chat) => {
                const { chat_id } = chat
                return chatsFromContact.data.some((chat) => chat.chat_id === chat_id)
            })
        }
    }

    const getAllMessages = async (userId: string, contactId: string) => {
        const chat = await getChatIdFrom(userId, contactId)

        return supabase.from("Message").select("*").eq("chat_id", chat?.chat_id)
    }

    const createChatWithUser = async (userId: string, contactId: string) => {
        // select chat between user and contact
        const commonChats = await getChatIdFrom(userId, contactId)

        if (!commonChats) {
            const { data: chat } = await supabase.from("Chat").insert({}).select().single()

            const { data, error } = await supabase.from("ChatUsers").insert([
                {
                    chat_id: chat?.id,
                    user_id: userId,
                },
                {
                    chat_id: chat?.id,
                    user_id: contactId,
                },
            ])
        }
    }

    const sendMessage = async (userId: string, contactId: string, message: string) => {
        const { chat_id: chatId } = (await getChatIdFrom(userId, contactId)) as Chats

        const { data, error } = await supabase.from("Message").insert([
            {
                chat_id: chatId,
                author_id: userId,
                text: message,
            },
        ])
    }

    return (
        <Provider
            value={{
                supabase,
                getAllChats,
                getAllMessages,
                createChatWithUser,
                sendMessage,
            }}
        >
            {children}
        </Provider>
    )
}

export { RealTimeContext, RealTimeProvider }
