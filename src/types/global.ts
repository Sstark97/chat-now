import { ReactNode } from "react"

/**
 * @interface ChildrenProps
 * @description Propiedades de un componente que tiene children
 * @property {ReactNode} children - Children del componente
 */
interface ChildrenProps {
    children?: ReactNode
}

interface GeneralHeaderProps {
    title: string
    description: string
}

interface LandingHeaderProps extends GeneralHeaderProps {
    keywords: string
}

export type { ChildrenProps, GeneralHeaderProps, LandingHeaderProps }
