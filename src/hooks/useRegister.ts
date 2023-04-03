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
    const router = useRouter()

    const register = async () => {
        const user = getUserDataFrom(ref.current)
        const userRegistered = await postFrom(user, "/api/auth/user/register")

        if (userRegistered) {
            await router.push("/login")
        }
    }
    return { register }
}

export default useRegister
