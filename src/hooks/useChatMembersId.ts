import { useSession } from "next-auth/react"
import { useContext } from "react"
import { ChatContext } from "@context/ChatProvider"

const useChatMembersId = () => {
    const { data: session } = useSession()
    const { selectedChat } = useContext(ChatContext)

    return {
        userId: session?.user?.id as string,
        contactId: selectedChat.id,
    }
}

export default useChatMembersId
