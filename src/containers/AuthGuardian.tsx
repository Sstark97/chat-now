import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import type { ChildrenProps } from "@customTypes/global"
import { REDIRECT } from "@lib/constants/links"

/**
 * Este componente es el encargado de proteger las rutas de autenticación
 * @param {ChildrenProps} children
 * @returns component
 * @example <AuthGuardian><LoginForm /></AuthGuardian>
 */
const AuthGuardian = ({ children }: ChildrenProps) => {
    const { status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === "authenticated") {
            router.push(REDIRECT.HOME)
        }
    }, [router, status])

    return <>{status === "authenticated" || status === "loading" ? <p>loading...</p> : children}</>
}

export default AuthGuardian
