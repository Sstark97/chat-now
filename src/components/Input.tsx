import type { InputProps } from "@customTypes/components"

const Input = ({ type, placeholder, children}: InputProps) => (
    <div className="relative flex flex-col mx-auto">
        <input
            type={type}
            placeholder={placeholder}
            className="bg-secondary text-white placeholder-white border border-gray-300 rounded-xl px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            autoComplete="new-password"
            required
        />
        {children}
    </div>
)

export default Input
