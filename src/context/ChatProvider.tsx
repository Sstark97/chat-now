import { useState, useEffect, createContext, MutableRefObject, useRef } from "react"
import type { ChildrenProps } from "@customTypes/global"
import type { Context } from "@customTypes/context"
import { isFormValid } from "@lib/utils/user"
import { Contacts } from "@customTypes/domain"
import { useSession } from "next-auth/react"
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
            const response = await fetch("/api/contacts")
            const data = await response.json()
            setContacts(data)
        }

        fetchContacts()
    }, [status])

    const handleSetErrorsInForm = () => {
        const haveErrors = !isFormValid(ref.current)
        setError(haveErrors)
    }

    return <Provider value={{ ref, error, contacts, handleSetErrorsInForm }}>{children}</Provider>
}

export { ChatContext, ChatProvider }
