import { useSession } from "next-auth/react"

const Message = ({ message }: any) => {
    const { status } = useSession()
    console.log(useSession())

    return <div>{message.id}</div>
}

export default Message
