import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import type { ChildrenProps } from "@customTypes/global"
import { REDIRECT } from "@lib/constants/links"

/**
 * Este componente es el encargado de proteger las rutas de autenticación
 * @param {ChildrenProps} { children } - children: componente a mostrar
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

    if (status === "loading") {
        return <p>loading...</p>
    }

    return <>{children}</>
}

export default AuthGuardian
