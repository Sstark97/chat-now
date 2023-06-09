import { ReactNode } from "react"
import { ChildrenProps } from "@customTypes/global"
import { IconType } from "react-icons"
import { Status } from "@prisma/client"
import { Toast } from "react-hot-toast"

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
    placeholder?: string
    name: string
    children?: ReactNode
    errorManager?: InputError
    location?: boolean
    className?: string
    errorClassName?: string
    value?: string
    disabled?: boolean
    notRequired?: boolean
}

/**
 * @interface Friendship
 * @description Propiedades del componente FriendshipItem
 * @property {string} name - Nombre del usuario
 * @property {string} time - Hora del último mensaje
 * @property {string} message - Último mensaje
 * @property {number} numMessages - Número de mensajes sin leer
 * @property {string} state - Estado del usuario
 */
interface Friendship {
    id: string
    name: string
    email?: string
    time?: string
    message?: string
    numMessages?: number
    image?: string
    status: string | Status
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
    location?: boolean
    className?: string
    notRequired?: boolean
    children?: ReactNode
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
    route?: string
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

/**
 * @interface MessageProps
 * @description Propiedades del componente Message
 * @property {string} receiverId - Id del receptor
 * @property {string} text - Texto del mensaje
 * @property {string} date - Fecha del mensaje
 */
interface MessageProps {
    author_id: string
    text: string
    date: string
}

/**
 * @interface DeleteModalProps
 * @description Propiedades del componente DeleteModal
 * @property {string} name - Nombre del usuario
 * @property {string} title - Título del modal
 * @property {string} error - Error del modal
 * @property {Function} handleDelete - Función para eliminar el usuario
 * @property {Function} cleanError - Función para limpiar el error
 */
interface DeleteModalProps {
    name?: string
    title: string
    error: string
    handleDelete: (email: string) => void
    cleanError: () => void
}

interface NotificationProps {
    t: Toast
    name: string
    message: string
    profilePicture?: string
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
    Friendship,
    NavBarLinks,
    NavBarProps,
    RenderByMap,
    FeatureProps,
    MessageProps,
    DeleteModalProps,
    NotificationProps,
}
