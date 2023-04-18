import { ReactNode } from "react"
import { ChildrenProps } from "@customTypes/global"
import { IconType } from "react-icons"

/**
 * @interface ErrorProps
 * @description Propiedades del componente Error
 * @property {string} className - Clase del componente
 * @property {string} message - Mensaje de error
 */
interface ErrorProps {
    className?: string
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
    message: string
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
    className?: string
    errorClassName?: string
}

/**
 * @interface ChatProps
 * @description Propiedades del componente Chat
 * @property {string} name - Nombre del usuario
 * @property {string} time - Hora del mensaje
 * @property {string} message - Mensaje
 * @property {number} numMessages - Número de mensajes
 * @property {string} state - Estado del usuario
 */
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
 * @property {string} className - Clase del input
 */
interface PasswordProps {
    placeholder: string
    validate?: boolean
    location?: string
    className?: string
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
 */
interface NavBarProps {
    type?: string
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
 * @interface AuthButtonProps
 * @description Propiedades del componente AuthButton
 * @property {string} credential - Credencial del botón
 */
interface AuthButtonProps extends ChildrenProps {
    credential: "google" | "github"
}

/**
 * @interface NavBarLinks
 * @description Propiedades del componente NavBarLinks
 * @property {string} href - Ruta del enlace
 * @property {IconType} icon - Icono del enlace
 */
interface NavBarLinks {
    href: string
    icon: IconType
}

export type {
    ErrorProps,
    InputError,
    InputProps,
    PasswordProps,
    ButtonProps,
    LevelOfSecurityProps,
    AuthHeaderProps,
    AuthButtonProps,
    ChatProps,
    NavBarLinks,
    NavBarProps,
}
