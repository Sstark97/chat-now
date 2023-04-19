import { useState, useEffect, createContext, MutableRefObject, useRef } from "react"
import type { ChildrenProps } from "@customTypes/global"
import type { Context } from "@customTypes/context"
import { isFormValid } from "@lib/utils/user"
import { Contacts } from "@customTypes/domain"
import { useSession } from "next-auth/react"
import { getFrom } from "@lib/utils/fetcher"
import { API } from "@lib/constants/links"
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
    const { status } = useSession()

    useEffect(() => {
        const fetchContacts = async () => {
            const data = await getFrom<Contacts[]>(API.GET_CONTACTS)

            if (JSON.stringify(data) !== JSON.stringify(contacts)) {
                setContacts(data)
            }
        }

        if (status === "authenticated") {
            fetchContacts()
        }
    }, [status, contacts])

    const handleSetErrorsInForm = () => {
        const haveErrors = !isFormValid(ref.current)
        setError(haveErrors)
    }

    const reloadContacts = async () => {
        const data = await getFrom(API.GET_CONTACTS)
        setContacts(data)
    }

    return (
        <Provider value={{ ref, error, contacts, handleSetErrorsInForm, reloadContacts }}>
            {children}
        </Provider>
    )
}

export { ChatContext, ChatProvider }
