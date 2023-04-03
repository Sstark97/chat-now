import Image from "next/image"
import type { AuthHeaderProps } from "@customTypes/components"

/**
 * Este componente es el encargado de mostrar el logo, el título y el subtítulo de la página de autenticación
 * @param {string} title
 * @returns component
 * @example <AuthHeader title="Iniciar sesión" />
 */
const AuthHeader = ({ title }: AuthHeaderProps) => {
    return (
        <section className="w-full flex flex-col items-center">
            <Image src="/logo.png" alt="Logo" width={70} height={70} className="2xl:w-1/12" />
            <h1 className="text-3xl font-bold pt-2 2xl:text-4xl 2xl:pt-3">{title}</h1>
        </section>
    )
}

export default AuthHeader
