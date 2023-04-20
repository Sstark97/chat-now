import { useSession } from "next-auth/react"

const Message = ({ message }: any) => {
    const { data: session } = useSession()
    const isReceiver = message.receiverId === session?.user.id

    return <div>{message.id}</div>
}

export default Message
