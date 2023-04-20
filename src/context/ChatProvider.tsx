import { createContext, MutableRefObject, useEffect, useRef, useState } from "react"
import { useSession } from "next-auth/react"
import { getFrom } from "@lib/utils/fetcher"
import { API } from "@lib/constants/links"
import { isFormValid } from "@lib/utils/user"
import { equals } from "@lib/utils"
import type { ChildrenProps } from "@customTypes/global"
import type { Context } from "@customTypes/context"
import type { Contacts } from "@customTypes/domain"

const ChatContext = createContext<Context>({} as Context)

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
    const [contacts, setContacts] = useState<Contacts[]>([])
    const [selectedChat, setSelectedChat] = useState<Contacts>({} as Contacts)
    const { status } = useSession()

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

    const handleOpenChat = (id: string) => {
        const chat = contacts.find((contact) => contact.id === id) as Contacts
        setSelectedChat(chat)
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
            }}
        >
            {children}
        </Provider>
    )
}

export { ChatContext, ChatProvider }
