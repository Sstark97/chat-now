import { ReactNode } from "react"

/**
 * @interface InputProps
 * @description Input component props
 * @property {string} type - Input type
 * @property {string} placeholder - Input placeholder
 * @property {ReactNode} children - Input children
 */
interface InputProps {
    type: string
    placeholder: string
    children?: ReactNode
}

/**
 * @interface ButtonProps
 * @description Button component props
 * @property {string} value - Button value
 */
interface ButtonProps {
    value: string
}

/**
 * @interface AuthHeaderProps
 * @description AuthHeader component props
 * @property {string} title - AuthHeader title
 */
interface AuthHeaderProps {
    title: string
}

export type { InputProps, ButtonProps, AuthHeaderProps }