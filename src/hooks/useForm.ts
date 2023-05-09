import { MutableRefObject, useState } from "react"
import { useRouter } from "next/router"
import { getUserDataFrom } from "@lib/utils/user"
import { changeFrom } from "@lib/utils/fetcher"

// TODO: mover a su fichero correspondiente
interface UseForm {
    action: () => Promise<void>
    error: string
}

/**
 * @description Hook para controlar los inputs
 * @param ref {MutableRefObject<HTMLDivElement>}
 * @param endPoint {string}
 * @param redirect {string}
 * @param type {string}
 * @param callback {() => Promise<void>}
 * @returns {{action: (function(): Promise<void>), error: string}}
 * @example
 * const { action, error } = useForm(ref, endPoint, redirect)
 */
const useForm = (
    ref: MutableRefObject<HTMLDivElement>,
    endPoint: string,
    redirect: string,
    type: string,
    callback?: () => Promise<void>
): UseForm => {
    const [error, setError] = useState("")
    const router = useRouter()

    const action = async () => {
        const user = getUserDataFrom(ref.current)

        try {
            const userFromApi = await changeFrom(user, endPoint, type)

            if (userFromApi) {
                setError("")
                if (callback) {
                    await callback()
                }
                await router.push(redirect)
            }
        } catch (error: unknown) {
            const { message } = error as Error
            setError(message)
        }
    }
    return { action, error }
}

export default useForm
