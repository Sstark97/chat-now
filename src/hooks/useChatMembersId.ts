import { useSession } from "next-auth/react"
import { useContext } from "react"
import { ChatContext } from "@context/ChatProvider"

/**
 * Hook para obtener los id de los miembros del chat
 * @returns {function(): *}
 */
const useChatMembersId = () => {
    const { data: session } = useSession()
    const { selectedChat } = useContext(ChatContext)

    return {
        userId: session?.user?.id as string,
        contactId: selectedChat.id,
    }
}

export default useChatMembersId
