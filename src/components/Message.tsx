import { useSession } from "next-auth/react"
import { MessageProps } from "@customTypes/components"

const Message = ({ receiverId, text, date }: MessageProps) => {
    const { data: session } = useSession()
    const isReceiver = receiverId === session?.user.id

    const styleReceiver = "bg-light_purple self-end"
    const styleSender = "bg-secondary lg:bg-primary self-start"

    return (
        <div
            className={`${
                isReceiver ? styleReceiver : styleSender
            } max-w-[13rem] lg:max-w-sm mx-7 my-2 px-4 py-3 rounded-lg break-words z-0`}
        >
            <p>{text}</p>
            <p className="pt-1 ml-9 text-xs opacity-50 text-right">
                {date} {isReceiver ? "√√" : <></>}
            </p>
        </div>
    )
}

export default Message
