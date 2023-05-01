import { useSession } from "next-auth/react"
import useChatContext from "@hooks/useChatContext"

/**
 * Hook para obtener los id de los miembros del chat
 * @returns {function(): *}
 */
const useChatMembersId = () => {
    const { data: session } = useSession()
    const { selectedChat } = useChatContext()

    return {
        userId: session?.user?.id as string,
        contactId: selectedChat.id,
    }
}

export default useChatMembersId
