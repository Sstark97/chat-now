import { Fragment } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"
import Message from "@components/Message"
import useChatScroll from "@hooks/useChatScroll"
import { formatDate } from "@lib/utils/formatDate"
import { capitalizeFirstLetter } from "@lib/utils/capitalizeFirstLetter"
import type { MessageListProps } from "@customTypes/containers"

/**
 * Este componente es el encargado de mostrar la lista de mensajes
 * @param {MessageListProps} { messages, lastMessageRef }
 * - messages: lista de mensajes
 * - lastMessageRef: referencia al último mensaje
 * @returns component
 * @example <MessageList messages={messages} />
 */
const MessageList = ({ messages, lastMessageRef }: MessageListProps) => {
    const { ref, handleScroll, isInBottom } = useChatScroll()
    let prevDate: Date | null = null

    messages.sort((a, b) => {
        if (a.date && b.date) {
            if (a.date < b.date) {
                return -1
            }
            if (a.date > b.date) {
                return 1
            }
            return 0
        }
        return 0
    })

    return (
        <>
            <div
                className="w-full h-full flex flex-col pb-[4.5rem] pt-[6.5rem] lg:pb-30 overflow-y-scroll scrollbar-hide"
                ref={ref}
            >
                {messages.map((message) => {
                    const messageDate = new Date(message.date)
                    const showDate =
                        prevDate === null || messageDate.toDateString() !== prevDate.toDateString()

                    if (showDate) {
                        prevDate = messageDate
                        return (
                            <Fragment key={message.id}>
                                <p className="mx-auto p-2 px-5 my-2 bg-secondary dark:bg-dark_secondary lg:text-secondary_text lg:bg-primary dark:lg:bg-dark_primary dark:text-dark_secondary_text rounded-2xl">
                                    {capitalizeFirstLetter(formatDate(message.date, "hoy"))}
                                </p>
                                <Message {...message} />
                            </Fragment>
                        )
                    }

                    return <Message key={message.id} {...message} />
                })}
                <div ref={lastMessageRef}></div>
            </div>
            {!isInBottom ? (
                <button
                    className="bg-secondary dark:bg-dark_secondary lg:bg-primary dark:lg:bg-dark_primary lg:bg-opacity-70 bg-opacity-80 text-black dark:text-white fixed bottom-[85px] right-14 z-10 p-3 rounded-full"
                    onClick={handleScroll}
                >
                    <MdKeyboardArrowDown className="text-2xl" />
                </button>
            ) : (
                <></>
            )}
        </>
    )
}

export default MessageList
