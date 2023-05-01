import { ChangeEvent, useState } from "react"
import useChatMembersId from "@hooks/useChatMembersId"
import useRealTimeContext from "@hooks/useRealTimeContext"
import { BsSendFill } from "react-icons/bs"

/**
 * Este componente es el encargado de mostrar el input para enviar mensajes
 * @component
 * @example <MessageInput />
 */
const MessageInput = () => {
    const [message, setMessage] = useState("")
    const { userId, contactId } = useChatMembersId()
    const { sendMessage } = useRealTimeContext()

    const handleChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    const handleSendMessage = () => {
        if (message !== "") {
            sendMessage(userId, contactId, message)
            setMessage("")
        }
    }

    return (
        <div className="w-full lg:w-[72%] p-4 px-7 flex items-center justify-between fixed bottom-0 bg-primary lg:bg-secondary">
            <input
                placeholder="Mensaje"
                type="text"
                className="w-[80%] lg:w-[88%] rounded-lg p-3 bg-secondary lg:bg-primary placeholder:text-black"
                value={message}
                onChange={handleChangeMessage}
            />
            <button
                className="w-[17%] lg:w-[9%] flex justify-center p-3 text-2xl font-bold bg-light_purple rounded-lg"
                onClick={handleSendMessage}
            >
                <BsSendFill />
            </button>
        </div>
    )
}

export default MessageInput
