import { useState } from "react"
import { deleteFrom } from "@lib/utils/fetcher"
import { API } from "@lib/constants/links"
import { signOut } from "next-auth/react"

const useDeleteUser = () => {
    const [error, setError] = useState("")

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
