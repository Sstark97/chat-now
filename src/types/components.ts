import { ReactNode } from "react"
import { ChildrenProps } from "@customTypes/containers"

/**
 * @interface ErrorProps
 * @description Propiedades del componente Error
 * @property {string} message - Mensaje de error
 */
interface ErrorProps {
    message: string
}

/**
 * @interface InputError
 * @description Propiedades del componente Input
 * @property {string} errorMessage - Mensaje de error del input
 * @property {RegExp} regex - Expresión regular para validar el input
 * @property {Function} validateFunction - Función para validar el input
 */
interface InputError {
    errorMessage: string
    regex: RegExp
    validate: (value: string) => boolean
}

/**
 * @interface InputProps
 * @description Propiedades del componente Input
 * @property {string} type - Tipo de input
 * @property {string} placeholder - Input placeholder
 * @property {string} name - Nombre del input
 * @property {ReactNode} children - Input children
 * @property {InputError} validate - Validación del input
 * @property {string} location - Ubicación del input
 */
interface InputProps {
    type: string
    placeholder: string
    name: string
    children?: ReactNode
    errorManager?: InputError
    location?: string
}

interface ChatProps {
    name: string
    time: string
    message: string
    numMessages?: number
    state: string
}

/**
 * @interface PasswordProps
 * @description Propiedades del componente Password
 * @property {string} placeholder - Input placeholder
 * @property {boolean} validate - Validación del input
 * @property {string} location - Ubicación del input
 */
interface PasswordProps {
    placeholder: string
    validate?: boolean
    location?: string
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
 * @interface LevelOfSecurityProps
 * @description Propiedades del componente LevelOfSecurity
 * @property {string} password - Contraseña
 */
interface LevelOfSecurityProps {
    password: string
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

export type { ErrorProps, InputError, InputProps, PasswordProps, ButtonProps, LevelOfSecurityProps, AuthHeaderProps, RegisterProps, AuthButtonProps, ChatProps }
