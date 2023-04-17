import { MutableRefObject, useState } from "react"
import { useRouter } from "next/router"
import { getUserDataFrom } from "@lib/utils/user"
import { postFrom } from "@lib/utils/fetcher"

interface UseForm {
    action: () => Promise<void>
    error: string
}

const useForm = (ref: MutableRefObject<HTMLDivElement>, endPoint: string, redirect: string): UseForm => {
    const [error, setError] = useState("")
    const router = useRouter()

    const action = async () => {
        const user = getUserDataFrom(ref.current)
        try {
            const userFromApi = await postFrom(user, endPoint)

            if (userFromApi) {
                setError("")
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
