import { ChangeEvent, FormEvent, useState } from "react"
import useChatMembersId from "@hooks/useChatMembersId"
import { BsSendFill } from "react-icons/bs"
import { Socket } from "socket.io-client"

/**
 * Este componente es el encargado de mostrar el input para enviar mensajes
 * @param {Socket} socket Socket
 * @returns component
 * @example <MessageInput />
 */
const MessageInput = ({ socket }: { socket: Socket }) => {
    const [message, setMessage] = useState("")
    const { userId, contactId } = useChatMembersId()

    /**
     * Esta función se encarga de actualizar el valor del input
     * @returns void
     * @example <input onChange={handleChangeMessage} />
     */
    const handleChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    /**
     * Esta función se encarga de enviar el mensaje
     * @returns void
     * @example <form onSubmit={handleSendMessage} />
     */
    const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (message !== "") {
            socket.emit("send-message", {
                userId,
                contactId,
                message,
            })

            setMessage("")
        }
    }

    return (
        <form
            className="w-full lg:w-[72%] p-4 px-7 flex items-center justify-between fixed bottom-0 bg-primary dark:bg-dark_primary lg:bg-secondary dark:lg:bg-dark_secondary"
            onSubmit={handleSendMessage}
        >
            <input
                placeholder="Mensaje"
                type="text"
                className="w-[80%] lg:w-[88%] rounded-lg p-3 bg-secondary dark:bg-dark_secondary lg:bg-primary dark:lg:bg-dark_primary placeholder:text-black dark:placeholder:text-white"
                value={message}
                onChange={handleChangeMessage}
            />
            <button
                className="w-[17%] lg:w-[9%] flex justify-center p-3 text-2xl font-bold bg-light_purple rounded-lg dark:bg-dark_purple"
                type="submit"
            >
                <BsSendFill />
            </button>
        </form>
    )
}

export default MessageInput
