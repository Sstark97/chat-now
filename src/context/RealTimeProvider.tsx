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
        // get all chats where the current user is a member
        return supabase
            .from("Chat")
            .select("sender_id, receiver_id, message_id, Message(*)")
            .or(`receiver_id.eq.${id},sender_id.eq.${id}`)
    }

    return (
        <Provider
            value={{
                supabase,
                getAllChats,
            }}
        >
            {children}
        </Provider>
    )
}

export { RealTimeContext, RealTimeProvider }
