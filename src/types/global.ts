import { ReactNode } from "react"

/**
 * @interface ChildrenProps
 * @description Propiedades de un componente que tiene children
 * @property {ReactNode} children - Children del componente
 */
interface ChildrenProps {
    children?: ReactNode
}

/**
 * @interface GeneralHeaderProps
 * @description Propiedades de un header general
 * @property {string} title - Título del header
 * @property {string} description - Descripción del header
 */
interface GeneralHeaderProps {
    title: string
    description: string
}

/**
 * @interface LandingHeaderProps
 * @description Propiedades de un header de landing
 * @property {string} keywords - Palabras clave del header
 */
interface LandingHeaderProps extends GeneralHeaderProps {
    keywords: string
}

export type { ChildrenProps, GeneralHeaderProps, LandingHeaderProps }
