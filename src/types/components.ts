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
 * @property {InputError} errorManager - Gestor de errores del input
 * @property {string} location - Ubicación del input
 * @property {string} className - Clase del input
 * @property {string} errorClassName - Clase del error del input
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
 * @interface FriendshipProps
 * @description Propiedades del componente Friendship
 * @property {string} name - Nombre del usuario
 * @property {string} time - Hora del último mensaje
 * @property {string} message - Último mensaje
 * @property {number} numMessages - Número de mensajes sin leer
 * @property {string} state - Estado del usuario
 */
interface FriendshipProps {
    id: string
    name: string
    time?: string
    message?: string
    numMessages?: number
    status: string
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
 * @interface NavBarProps
 * @description Propiedades del componente NavBar
 * @property {string} type - Tipo de NavBar
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

/**
 * @interface RenderByMap
 * @description Propiedades del componente RenderByMap
 * @property {Function} transform - Función para transformar el elemento
 */
interface RenderByMap {
    transform: (element: IconType | string) => JSX.Element
}

/**
 * Interface que define las propiedades del componente Feature.
 * @interface FeatureProps
 * @property {string} header - Título del componente.
 * @property {string} description - Descripción del componente.
 */
interface FeatureProps extends ChildrenProps {
    header: string
    description: string
}

 * @interface MessageProps
 * @description Propiedades del componente Message
 * @property {string} receiverId - Id del receptor
 * @property {string} text - Texto del mensaje
 * @property {string} date - Fecha del mensaje
 */
interface MessageProps {
    receiverId: string
    text: string
    date: string
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
    FriendshipProps,
    NavBarLinks,
    NavBarProps,
    RenderByMap,
    FeatureProps,
    MessageProps,
}
