import { createContext, MutableRefObject, useEffect, useRef, useState } from "react"
import { useSession } from "next-auth/react"
import useRealTimeContext from "@hooks/useRealTimeContext"
import { getFrom } from "@lib/utils/fetcher"
import { API } from "@lib/constants/links"
import { isFormValid } from "@lib/utils/user"
import { equals } from "@lib/utils"
import type { ChildrenProps } from "@customTypes/global"
import type { ChatContext } from "@customTypes/context"
import type { Contacts } from "@customTypes/domain"
import type { Friendship } from "@customTypes/components"

const ChatContext = createContext<ChatContext>({} as ChatContext)

/**
 * Este componente es el encargado de proveer el contexto de la aplicación
 * @param {ChildrenProps} { children } - children: componente a mostrar
 * @returns component
 * @example <ChatProvider>children</ChatProvider>
 */
const ChatProvider = ({ children }: ChildrenProps) => {
    const { Provider } = ChatContext
    const ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>
    const [error, setError] = useState<boolean>(true)
    const [contacts, setContacts] = useState<Friendship[]>([])
    const [selectedChat, setSelectedChat] = useState<Friendship>({} as Friendship)
    const { data: session, status } = useSession()
    const { createChatWithUser } = useRealTimeContext()

    console.log(session)

    useEffect(() => {
        const fetchContacts = async () => {
            const data = await getFrom<Contacts[]>(API.GET_CONTACTS)
            if (equals(data, contacts)) {
                setContacts(data)
            }
        }

        if (status === "authenticated") {
            fetchContacts()
        }
    }, [status, contacts])

    /**
     * Este método es el encargado de comprobar si el formulario es válido
     * @returns void
     * @example handleSetErrorsInForm()
     */
    const handleSetErrorsInForm = () => {
        const haveErrors = !isFormValid(ref.current)
        setError(haveErrors)
    }

    /**
     * Este método es el encargado de recargar los contactos
     * @returns Promise<void>
     * @example await reloadContacts()
     */
    const reloadContacts = async () => {
        const data = await getFrom(API.GET_CONTACTS)
        setContacts(data)
    }

    /**
     * Este método es el encargado de abrir un chat
     * @param friendship
     * @returns void
     * @example handleOpenChat(friendship)
     */
    const handleOpenChat = (friendship: Friendship) => {
        const userId = session?.user?.id as string

        setSelectedChat(friendship)
        createChatWithUser(userId, friendship.id)
    }

    /**
     * Este método es el encargado de cerrar un chat
     * @returns void
     * @example handleCloseChat()
     */
    const handleCloseChat = () => {
        setSelectedChat({} as Friendship)
    }

    /**
     * Este método es el encargado de cambiar el nombre del chat seleccionado
     * @returns void
     * @param name
     * @example handleChangeSelectedChatName(name)
     */
    const handleChangeSelectedChatName = (name: string) => {
        setSelectedChat((prevState) => ({ ...prevState, name }))
    }

    return (
        <Provider
            value={{
                ref,
                error,
                contacts,
                selectedChat,
                handleSetErrorsInForm,
                reloadContacts,
                handleOpenChat,
                handleCloseChat,
                handleChangeSelectedChatName,
            }}
        >
            {children}
        </Provider>
    )
}

export { ChatContext, ChatProvider }
