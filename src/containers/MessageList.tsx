import { MdKeyboardArrowDown } from "react-icons/md"
import Message from "@components/Message"
import useChatScroll from "@hooks/useChatScroll"
import type { MessageListProps } from "@customTypes/containers"

/**
 * Este componente es el encargado de mostrar la lista de mensajes
 * @param messages
 * @component
 * @example <MessageList messages={messages} />
 */
const MessageList = ({ messages }: MessageListProps) => {
    const { ref, handleScroll } = useChatScroll()

    return (
        <>
            <div
                className="w-full h-full flex flex-col pb-[4.5rem] pt-[6.5rem] lg:pb-30 overflow-y-scroll scrollbar-hide"
                ref={ref}
            >
                {messages.map((message) => (
                    <Message key={message.id} {...message} />
                ))}
            </div>
            <button
                className="bg-secondary dark:bg-dark_secondary lg:bg-primary dark:lg:bg-dark_primary lg:bg-opacity-70 bg-opacity-80 text-black dark:text-white fixed bottom-[85px] right-14 z-10 p-3 rounded-full"
                onClick={handleScroll}
            >
                <MdKeyboardArrowDown className="text-2xl" />
            </button>
        </>
    )
}

export default MessageList
