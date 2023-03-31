import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import type { ChildrenProps } from "@customTypes/containers"

const AuthGuardian = ({ children }: ChildrenProps) => {
    const { data: session } = useSession()
    const router = useRouter()

    if (session) {
        router.push("/")
    }

    return <>{children}</>
}

export default AuthGuardian
