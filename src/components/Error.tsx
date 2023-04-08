import type { ErrorProps } from "@customTypes/components"

/**
 * Este componente es el encargado de mostrar un mensaje de error
 * @param message
 * @returns component
 * @example <Error message="Error" />
 */
const Error = ({ message }: ErrorProps) => <p className="text-busy font-semibold mt-1 opacity-60">{message}</p>

export default Error
