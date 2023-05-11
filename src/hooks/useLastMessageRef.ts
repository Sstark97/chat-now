import { useEffect, useRef } from "react"
import { Message } from "@customTypes/domain"

/**
 * Este hook se encarga de obtener la referencia del último mensaje
 * @param {Message[]} messages
 * @returns {MutableRefObject<HTMLDivElement>}
 */
const useLastMessageRef = (messages: Message[]) => {
    const lastMessageRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [messages])

    return lastMessageRef
}

export default useLastMessageRef
