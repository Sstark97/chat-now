import { ReactNode } from "react"
import { ChildrenProps } from "@customTypes/containers"

/**
 * @interface InputProps
 * @description Propiedades del componente Input
 * @property {string} type - Tipo de input
 * @property {string} placeholder - Input placeholder
 * @property {string} name - Nombre del input
 * @property {ReactNode} children - Input children
 * @property {(e: FormEvent<HTMLInputElement>) => void} validate - Función para validar el input
 */
interface InputProps {
    type: string
    placeholder: string
    name: string
    children?: ReactNode
    // eslint-disable-next-line no-unused-vars
    validate(value: string): boolean
}

/**
 * @interface ButtonProps
 * @description Propiedades del componente Button
 * @property {string} value - Valor del botón
 */
interface ButtonProps {
    value: string
    action(): void
}

/**
 * @interface AuthHeaderProps
 * @description Propiedades del componente AuthHeader
 * @property {string} title - Título del componente
 */
interface AuthHeaderProps {
    title: string
}

/**
 * @interface RegisterProps
 * @description Propiedades del componente Register
 * @property {() => void} onRegister - Función para registrar un usuario
 */
interface RegisterProps {
    onRegister(): void
}

/**
 * @interface AuthButtonProps
 * @description Propiedades del componente AuthButton
 * @property {string} credential - Credencial del botón
 */
interface AuthButtonProps extends ChildrenProps {
    credential: "google" | "github"
}

export type { InputProps, ButtonProps, AuthHeaderProps, RegisterProps, AuthButtonProps }
