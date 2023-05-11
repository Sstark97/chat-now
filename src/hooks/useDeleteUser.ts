import { useState } from "react"
import { deleteFrom } from "@lib/utils/fetcher"
import { API } from "@lib/constants/links"
import { signOut } from "next-auth/react"

/**
 * Este hook se encarga de eliminar un usuario
 * @returns {object} - Objeto con la función para eliminar un usuario, el error y la función para limpiar el error
 */
const useDeleteUser = () => {
    const [error, setError] = useState("")

    /**
     * Esta función se encarga de eliminar un usuario
     * @param {string} email
     * @returns {Promise<void>}
     */
    const handleDelete = async (email: string) => {
        try {
            await deleteFrom({ email }, API.DELETE_USER)
            setError("")
            signOut()
        } catch (error) {
            const { message } = error as Error
            setError(message)
        }
    }

    const cleanError = () => setError("")

    return { error, handleDelete, cleanError }
}

export default useDeleteUser
