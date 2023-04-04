import type { InputProps } from "@customTypes/components"
import { useState, FormEvent } from "react"

/**
 * Este componente es el encargado de mostrar un input
 * @param {string} type
 * @param {string} placeholder
 * @param {string} name
 * @param children
 * @param {ErrorManager} errorManager
 * @returns component
 * @example <Input type="text" placeholder="Nombre de usuario" />
 */
const Input = ({ type, placeholder, name, children, errorManager }: InputProps) => {
    const [error, setError] = useState("")

    const defineError = (e: FormEvent<HTMLInputElement>) => {
        if (errorManager) {
            const element = e.currentTarget
            setError(errorManager.validate(element.value) ? "" : errorManager.errorMessage)
        }
    }

    return (
        <>
            <div className="relative flex flex-col mx-auto">
                <input
                    type={type}
                    placeholder={placeholder}
                    className="bg-secondary text-white placeholder-white border border-gray-300 rounded-xl px-3 py-2 mt-5 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    autoComplete="new-password"
                    name={name}
                    required
                    onBlur={defineError}
                />
                {children}
            </div>
            {error ? <p id="error">{error}</p> : null}
        </>
    )
}

export default Input
