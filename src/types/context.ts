import { MutableRefObject } from "react"

/**
 * @interface Context
 * @description Propiedades del contexto
 * @property {MutableRefObject<HTMLDivElement>} ref - Referencia al formulario
 * @property {boolean} error - Error del formulario
 * @property {Function} handleSetErrorsInForm - Función para setear los errores en el formulario
 */
interface Context {
    ref: MutableRefObject<HTMLDivElement>
    error: boolean
    handleSetErrorsInForm(): void
}

export type { Context }
