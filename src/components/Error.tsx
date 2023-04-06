import type { ErrorProps } from "@customTypes/components"

const Error = ({ message }: ErrorProps) => <p className="text-busy font-semibold mt-1 opacity-60">{message}</p>

export default Error
