import type { InputProps } from "@customTypes/components"

const Input = ({ type, placeholder }: InputProps) => (
    <div className="w-1/4 flex flex-col mx-auto">
        <input type={type} placeholder={placeholder} className="bg-secondary text-white placeholder-white border border-gray-300 rounded-xl px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" required/>
    </div>
)

export default Input
