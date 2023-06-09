import moment from "moment"
import { useSession } from "next-auth/react"
import { MessageProps } from "@customTypes/components"

/**
 * Este componente es el encargado de mostrar un mensaje
 * @param {MessageProps} { author_id, text, date }
 * - author_id: ID del autor del mensaje
 * - text: Texto del mensaje
 * - date: Fecha del mensaje
 * @returns component
 * @example <Message />
 */
const Message = ({ author_id, text, date }: MessageProps) => {
    const { data: session } = useSession()
    const isReceiver = author_id === session?.user.id

    const formattedDate = moment.utc(date).local().format("HH:mm")
    const styleReceiver = "bg-light_purple dark:bg-dark_purple self-end"
    const styleSender =
        "bg-secondary dark:bg-dark_secondary lg:bg-primary dark:lg:bg-dark_primary self-start"

    return (
        <div
            className={`${
                isReceiver ? styleReceiver : styleSender
            } max-w-[13rem] lg:max-w-sm mx-7 my-2 px-4 py-3 rounded-lg break-words z-0`}
        >
            <p>{text}</p>
            <p className="pt-1 ml-9 text-xs opacity-50 text-right">
                {formattedDate} {isReceiver ? "√√" : <></>}
            </p>
        </div>
    )
}

export default Message
