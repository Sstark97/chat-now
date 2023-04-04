import type { InputProps } from "@customTypes/components"
import { FormEvent, useState } from "react"

/**
 * Este componente es el encargado de mostrar un input
 * @param {string} type
 * @param {string} placeholder
 * @param {string} name
 * @param children
 * @returns component
 * @example <Input type="text" placeholder="Nombre de usuario" />
 */
const Input = ({ type, placeholder, name, children, validate }: InputProps) => {
    const [emailError, setEmailError] = useState("")

    const handleBlur = (e: FormEvent<HTMLInputElement>) => {
        const element = e.currentTarget
        setEmailError(validate(element.value) ? "" : "El email no es válido")
    }

    console.log(validate)

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
                    onBlur={handleBlur}
                />
                {children}
            </div>
            {emailError ? <p id="emailError">{emailError}</p> : null}
        </>
    )
}

export default Input
