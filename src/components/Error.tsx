import type { ErrorProps } from "@customTypes/components"

/**
 * Este componente es el encargado de mostrar un mensaje de error
 * @param className
 * @param message
 * @returns component
 * @example <Error message="Error" />
 */
const Error = ({ className, message }: ErrorProps) => (
    <p className={`text-busy font-semibold mt-1 opacity-60 ${className}`}>{message}</p>
)

export default Error
