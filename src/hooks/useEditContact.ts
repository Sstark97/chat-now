import { useState } from "react"
import { useRouter } from "next/router"
import useChatContext from "@hooks/useChatContext"
import { getUserDataFrom } from "@lib/utils/user"
import { changeFrom } from "@lib/utils/fetcher"
import { API, REDIRECT } from "@lib/constants/links"

/**
 * @description Hook para controlar los inputs
 * @returns {{handleEdit: (function(): Promise<void>), error: string}}
 * @example
 * const { handleEdit, error } = useEditContact()
 */
const useEditContact = () => {
    const [error, setError] = useState("")
    const router = useRouter()
    const { ref, selectedChat, reloadContacts, handleChangeSelectedChatName } = useChatContext()

    const handleEdit = async () => {
        const contactBody = getUserDataFrom(ref.current)
        try {
            await changeFrom(
                { ...contactBody, id: selectedChat.id as string },
                API.MODIFY_CONTACT,
                "PUT"
            )
            await reloadContacts()
            handleChangeSelectedChatName(contactBody.name)
            await router.push(REDIRECT.CONTACTS)
        } catch (error) {
            const { message } = error as Error
            setError(message)
        }
    }

    return { handleEdit, error }
}

export default useEditContact
