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
    action(): void
}

/**
 * @interface AuthHeaderProps
 * @description AuthHeader component props
 * @property {string} title - AuthHeader title
 */
interface AuthHeaderProps {
    title: string
}

/**
 * @interface RegisterProps
 * @description Register component props
 * @property {() => void} onRegister - Register function
 */
interface RegisterProps {
    onRegister(): void
}

export type { InputProps, ButtonProps, AuthHeaderProps, RegisterProps }
