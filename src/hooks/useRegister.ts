import { useState } from "react"
import { useRouter } from "next/router"
import { getUserDataFrom } from "@lib/utils/user"
import { postFrom } from "@lib/utils/fetcher"
import { MutableRefObject } from "react"

/**
 * @description Hook para registrar un usuario
 * @param ref
 * @returns {{register: (function(): Promise<void>)}}
 * @example
 * const { register } = useRegister(ref)
 */
const useRegister = (ref: MutableRefObject<HTMLDivElement>) => {
    const [error, setError] = useState("")
    const router = useRouter()

    const register = async () => {
        const user = getUserDataFrom(ref.current)
        try {
            const userRegistered = await postFrom(user, "/api/auth/user/register")

            if (userRegistered) {
                setError("")
                await router.push("/login")
            }
        } catch (error: Error | any) {
            setError(error.message)
        }
    }
    return { register, error }
}

export default useRegister
