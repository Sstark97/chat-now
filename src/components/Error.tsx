import type { ErrorProps } from "@customTypes/components"

/**
 * Este componente es el encargado de mostrar un mensaje de error
 * @param {ErrorProps} { className, message }
 * - className: clase del componente
 * - message: mensaje de error
 * @returns component
 * @example <Error message="Este campo es obligatorio" />
 */
const Error = ({ className, message }: ErrorProps) => (
    <p className={`text-busy font-semibold mt-1 opacity-60 ${className}`}>{message}</p>
)

export default Error
