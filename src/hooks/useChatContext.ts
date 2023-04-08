import { useContext } from "react"
import { ChatContext } from "@context/ChatProvider"

/**
 * @description Hook para obtener el contexto de chat
 * @returns {function(): *}
 */
const useChatContext = () => useContext(ChatContext)

export default useChatContext
