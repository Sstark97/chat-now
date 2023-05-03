import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import type { ChildrenProps } from "@customTypes/global"
import { REDIRECT } from "@lib/constants/links"
import Loading from "@components/Loading"

// TODO: Refactorizar para que sea un solo componente y no haga un flash de loading
/**
 * Este componente es el encargado de proteger las rutas de autenticación
 * @param {ChildrenProps} { children } - children: componente a mostrar
 * @returns component
 * @example <AuthGuardian><LoginForm /></AuthGuardian>
 */
const LoggedGuardian = ({ children }: ChildrenProps) => {
    const { status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push(REDIRECT.LANDING)
        }
    }, [router, status])

    if (status === "loading" || status === "unauthenticated") {
        return <Loading />
    }

    return <>{children}</>
}

export default LoggedGuardian
