import { ReactNode } from "react"

interface InputProps {
    type: string
    placeholder: string
    children?: ReactNode
}

interface ButtonProps {
    value: string
}

interface AuthHeaderProps {
    title: string
}

export type { InputProps, ButtonProps, AuthHeaderProps }
