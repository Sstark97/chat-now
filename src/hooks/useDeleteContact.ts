import { useState } from "react"
import { useRouter } from "next/router"
import useChatContext from "@hooks/useChatContext"
import { deleteFrom } from "@lib/utils/fetcher"
import { API, REDIRECT } from "@lib/constants/links"

const useDeleteContact = (setIsOpen: { (close: boolean): void }) => {
    const [error, setError] = useState("")
    const router = useRouter()
    const { selectedChat, reloadContacts, handleCloseChat } = useChatContext()

    const handleDelete = async (email: string) => {
        try {
            await deleteFrom(
                { id: selectedChat.id as string, userEmail: email },
                API.DELETE_CONTACT
            )
            await reloadContacts()
            setIsOpen(false)
            handleCloseChat()
            await router.push(REDIRECT.CONTACTS)
        } catch (error) {
            const { message } = error as Error
            setError(message)
        }
    }

    const cleanError = () => setError("")

    return { handleDelete, error, cleanError }
}

export default useDeleteContact
