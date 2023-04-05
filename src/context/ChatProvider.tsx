import { useState, createContext, MutableRefObject, useRef } from "react"
import type { ChildrenProps } from "@customTypes/containers"
import type { Context } from "@customTypes/context"
import { isFormValid } from "@lib/utils/user"
const ChatContext = createContext<Context>({} as Context)

const ChatProvider = ({ children }: ChildrenProps) => {
    const { Provider } = ChatContext
    const ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>
    const [error, setError] = useState<boolean>(true)

    const handleSetErrorsInForm = () => {
        setError(!isFormValid(ref.current))
    }

    return <Provider value={{ ref, error, handleSetErrorsInForm }}>{children}</Provider>
}

export { ChatContext, ChatProvider }
