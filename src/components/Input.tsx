import type { InputProps } from "@customTypes/components"

const Input = ({ type, placeholder, label }: InputProps) => (
    <div className="w-1/4 flex flex-col">
        <label className="text-sm font-semibold text-gray-600">{label}</label>
        <input type={type} placeholder={placeholder} className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
    </div>
)

export default Input
