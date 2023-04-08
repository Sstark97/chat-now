import useControlInput from "@hooks/useControlInput"
import type { InputProps } from "@customTypes/components"
import LevelSecurityPassword from "@components/LevelSecurityPassword"
import { useState } from "react"

/**
 * Este componente es el encargado de mostrar un input
 * @param {string} type
 * @param {string} placeholder
 * @param {string} name
 * @param children
 * @param {InputError} errorManager
 * @param {string} location
 * @returns component
 * @example <Input type="text" placeholder="Nombre de usuario" />
 */
const Input = ({ type, placeholder, name, children, errorManager, location }: InputProps) => {
    const { error, border, defineError } = useControlInput(errorManager)
    const inputClass = "bg-secondary text-white placeholder-white border rounded-xl px-3 py-2 mt-5 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"

    const [password, setPassword] = useState("")

    return (
        <>
            <div className="relative flex flex-col mx-auto">
                <input
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    className={`${inputClass} ${border}`}
                    autoComplete="new-password"
                    name={name}
                    onBlur={defineError}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                {children}
            </div>
            {error ? <p className="text-busy text-sm mt-1 opacity-60">{error}</p> : null}
            {location === "register" ? <LevelSecurityPassword password={password} /> : null}
        </>
    )
}

export default Input
