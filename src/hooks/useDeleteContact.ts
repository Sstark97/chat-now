import { useState } from "react"
import { useRouter } from "next/router"
import useChatContext from "@hooks/useChatContext"
import { deleteFrom } from "@lib/utils/fetcher"
import { API, REDIRECT } from "@lib/constants/links"

/**
 * @description Hook para eliminar un contacto
 * @returns {object} - Objeto con la función para eliminar un contacto, el error y la función para limpiar el error
 * @example
 * const { handleDelete, error, cleanError } = useDeleteContact(setIsOpen)
 */
const useDeleteContact = () => {
    const [error, setError] = useState("")
    const router = useRouter()
    const { selectedChat, reloadContacts, handleCloseChat } = useChatContext()

    /**
     * Esta función se encarga de eliminar un contacto
     * @param {string} email
     * @returns {Promise<void>}
     */
    const handleDelete = async (email: string) => {
        try {
            await deleteFrom(
                { id: selectedChat.id as string, userEmail: email },
                API.DELETE_CONTACT
            )
            setError("")
            await reloadContacts()
            handleCloseChat()
            await router.push(REDIRECT.CONTACTS)
        } catch (error) {
            const { message } = error as Error
            setError(message)
        }
    }

    /**
     * Esta función se encarga de limpiar el erro
     * @returns {void}
     */
    const cleanError = () => setError("")

    return { handleDelete, error, cleanError }
}

export default useDeleteContact
