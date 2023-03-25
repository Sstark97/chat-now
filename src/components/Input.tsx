import type { InputProps } from "@customTypes/components"

/**
 * Este componente es el encargado de mostrar un input
 * @param {string} type
 * @param {string} placeholder
 * @param children
 * @returns component
 * @example <Input type="text" placeholder="Nombre de usuario" />
 */
const Input = ({ type, placeholder, children }: InputProps) => (
    <div className="relative flex flex-col mx-auto">
        <input
            type={type}
            placeholder={placeholder}
            className="bg-secondary text-white placeholder-white border border-gray-300 rounded-xl px-3 py-2 mt-5 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            autoComplete="new-password"
            required
        />
        {children}
    </div>
)

export default Input
