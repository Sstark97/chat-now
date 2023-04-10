import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { REDIRECT } from "@lib/const"
import type { ChildrenProps } from "@customTypes/global"

// TODO: Refactorizar para que sea un solo componente y no haga un flash de loading
/**
 * Este componente es el encargado de proteger las rutas de autenticación
 * @param {ChildrenProps} children
 * @returns component
 * @example <AuthGuardian><LoginForm /></AuthGuardian>
 */
const LoggedGuardian = ({ children }: ChildrenProps) => {
    const { status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push(REDIRECT.LOGIN)
        }
    }, [router, status])

    if (status === "loading" || status === "unauthenticated") {
        return <p>loading...</p>
    }

    return <>{children}</>
}

export default LoggedGuardian
