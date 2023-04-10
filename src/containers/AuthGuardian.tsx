import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { REDIRECT } from "@lib/const"
import type { ChildrenProps } from "@customTypes/global"

/**
 * Este componente es el encargado de proteger las rutas de autenticación
 * @param {ChildrenProps} children
 * @returns component
 * @example <AuthGuardian><LoginForm /></AuthGuardian>
 */
const AuthGuardian = ({ children }: ChildrenProps) => {
    const { data: session } = useSession()
    const router = useRouter()

    if (session) {
        router.push(REDIRECT.HOME)
    }

    return <>{children}</>
}

export default AuthGuardian
