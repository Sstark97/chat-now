import { createContext } from "react"
import { createClient } from "@supabase/supabase-js"
import * as process from "process"
import type { ChildrenProps } from "@customTypes/global"
import type { RealTimeContext } from "@customTypes/context"

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

    const getAllChats = async (id: string) => {
        // get all chats where the current user is a member and the receiver and sender are unique

        return supabase.from("ChatUsers").select("chat_id").eq("user_id", id)
    }

    const getAllMessages = async (id: number) => {
        // get all messages from a chat where the current user is a member

        return supabase.from("Message").select("*").eq("chat_id", id)
    }

    return (
        <Provider
            value={{
                supabase,
                getAllChats,
                getAllMessages,
            }}
        >
            {children}
        </Provider>
    )
}

export { RealTimeContext, RealTimeProvider }
