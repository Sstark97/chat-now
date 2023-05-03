import { createContext } from "react"
import { createClient, PostgrestSingleResponse } from "@supabase/supabase-js"
import * as process from "process"
import type { ChildrenProps } from "@customTypes/global"
import type { RealTimeContext } from "@customTypes/context"
import type { Chats, ContactChats, Message, MessageResponse } from "@customTypes/domain"
import type { Friendship } from "@customTypes/components"

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

    /**
     * Este método es el encargado de obtener todos los chats del usuario
     * @param id
     * @returns Promise<PostgrestSingleResponse<Chats[]>>
     * @example getAllChats()
     */
    const getAllChats = async (id: string): Promise<PostgrestSingleResponse<Chats[]>> => {
        // get all chats where the current user is a member and the receiver and sender are unique

        return supabase.from("ChatUsers").select("chat_id").eq("user_id", id)
    }

    /**
     * Este método es el encargado de obtener todos los chats del usuario
     * @param userId
     * @param contactId
     * @returns Promise<PostgrestSingleResponse<Chats[]>>
     * @example getAllChats()
     */
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

    /**
     * Este método es el encargado de obtener todos los mensajes de un chat
     * @param userId
     * @param contactId
     * @returns Promise<PostgrestSingleResponse<ContactChats[]>>
     * @example getAllMessages()
     */
    const getAllMessages = async (userId: string, contactId: string) => {
        const chat = await getChatIdFrom(userId, contactId)

        const { data: messages, error } = await supabase
            .from("Message")
            .select("*")
            .eq("chat_id", chat?.chat_id)

        return { data: messages as Message[], error } as MessageResponse
    }

    /**
     * Este método es el encargado de crear un chat entre dos usuarios
     * @param userId
     * @param contactId
     * @returns Promise<void>
     * @example createChatWithUser()
     */
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

    /**
     * Este método es el encargado de enviar un mensaje
     * @param userId
     * @param contactId
     * @param message
     * @returns Promise<void>
     * @example sendMessage()
     */
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

    /**
     * Este método es el encargado de obtener los contactos de un usuario
     * @param userId
     * @param chats
     * @returns Promise<ContactChats[]>
     * @example getContactsFromChats()
     */
    const getContactsFromChats = async (userId: string, chats: Chats[]) => {
        return (await Promise.all(
            chats.map(async (chat) => {
                const { data: contacts } = await supabase
                    .from("ChatUsers")
                    .select("User(id, image, status)")
                    .eq("chat_id", chat.chat_id)
                    .neq("user_id", userId)

                return contacts ? contacts[0].User : null
            })
        )) as ContactChats[]
    }

    /**
     * Este método es el encargado de obtener los nombres de los contactos
     * @param contacts
     * @returns Promise<string[]>
     * @example getContactsNames()
     */
    const getContactsNames = async (contacts: ContactChats[]) => {
        return (await Promise.all(
            contacts.map(async (contact) => {
                const { data: name } = await supabase
                    .from("Contact")
                    .select("name")
                    .eq("contact_id", contact?.id)

                return name ? name[0].name : null
            })
        )) as string[]
    }

    /**
     * Este método es el encargado de obtener los valores de los chats
     * @param userId
     * @param contacts
     * @returns Promise<Friendship[]>
     * @example getChatsValues()
     */
    const getChatsValues = async (userId: string, contacts: ContactChats[]) => {
        return await Promise.all(
            contacts.map(async (contact) => {
                const { data: allMessages } = await getAllMessages(userId, contact.id)
                const lastMessage = allMessages.at(-1) as Message
                if (lastMessage) {
                    const { id, author_id, text, date } = lastMessage

                    return {
                        id,
                        author_id,
                        text,
                        date,
                    }
                }
            })
        )
    }

    /**
     * Este método es el encargado de obtener todos los chats del usuario
     * @param userId
     * @returns Promise<Friendship[]>
     * @example getChats()
     */
    const getChats = async (userId: string): Promise<Friendship[]> => {
        // get all contact data from chats where the current user is a member
        const { data: chats } = await getAllChats(userId)

        const contactsChats = await getContactsFromChats(userId, chats as Chats[])
        const nameContacts = await getContactsNames(contactsChats)
        const chatsValues = await getChatsValues(userId, contactsChats)

        return nameContacts.map((contactName, index) => {
            const { id, image, status } = contactsChats[index]
            const chat = chatsValues.at(index)

            if (chat) {
                const { author_id, text, date } = chat

                return {
                    id,
                    name: contactName,
                    image,
                    status,
                    message: text,
                    time: date,
                    author_id,
                }
            }

            return {
                id,
                name: contactName,
                image,
                status,
            }
        })
    }

    return (
        <Provider
            value={{
                supabase,
                getAllChats,
                getAllMessages,
                createChatWithUser,
                sendMessage,
                getChats,
            }}
        >
            {children}
        </Provider>
    )
}

export { RealTimeContext, RealTimeProvider }
