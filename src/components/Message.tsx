import { useSession } from "next-auth/react"

const Message = ({ message }: any) => {
    const { data: session } = useSession()
    const isReceiver = message.receiverId === session?.user.id

    const styleReceiver = "bg-light_purple self-end"
    const styleSender = "bg-primary self-start"

    return (
        <div
            className={`${
                isReceiver ? styleReceiver : styleSender
            } max-w-sm mx-7 my-2 px-4 py-3 rounded-lg break-words`}
        >
            <p>{message.text}</p>
            <p className="pt-1 ml-9 text-xs opacity-50 text-right">
                {message.date} {isReceiver ? "√√" : <></>}
            </p>
        </div>
    )
}

export default Message
