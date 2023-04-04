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
    //const [border, setBorder] = useState("")

    const defineError = (e: FormEvent<HTMLInputElement>) => {
        if (errorManager) {
            const element = e.currentTarget
            setError(errorManager.validate(element.value) ? "" : errorManager.errorMessage)
            //setBorder(errorManager.validate(element.value) ? "border: 2px; border-color: green" : "border-2 border-busy")
        }
    }

    const inputClass = "bg-secondary text-white placeholder-white border border-gray-300 rounded-xl px-3 py-2 mt-5 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"

    return (
        <>
            <div className="relative flex flex-col mx-auto">
                <input
                    type={type}
                    placeholder={placeholder}
                    className={inputClass}
                    style={{error === "" ? "border: 2px; border-color: green" : "border: 2px; border-color: red"}}
                    autoComplete="new-password"
                    name={name}
                    required
                    onBlur={defineError}
                />
                {children}
            </div>
            {error ? <p className="text-busy text-sm mt-1 opacity-60">{error}</p> : null}
        </>
    )
}

export default Input
