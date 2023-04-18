import useControlInput from "@hooks/useControlInput"
import type { InputProps } from "@customTypes/components"
import LevelSecurityPassword from "@components/LevelSecurityPassword"
import { useState } from "react"
import { randomPassword } from "@lib/utils/password"
import Error from "@components/Error"

/**
 * Este componente es el encargado de mostrar un input
 * @param {string} type
 * @param {string} placeholder
 * @param {string} name
 * @param children
 * @param {InputError} errorManager
 * @param {string} location
 * @param {string} className
 * @param {string} errorClassName
 * @returns component
 * @example <Input type="text" placeholder="Nombre de usuario" />
 */
const Input = ({
    type,
    placeholder,
    name,
    children,
    errorManager,
    location,
    className,
    errorClassName,
}: InputProps) => {
    const { error, border, defineError } = useControlInput(errorManager)
    const inputClass =
        "bg-secondary text-white placeholder-white border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"

    const [password, setPassword] = useState("")

    return (
        <>
            <div className="w-full relative flex justify-center items-center mx-auto">
                <input
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    className={`${inputClass} ${className} ${border}`}
                    autoComplete="new-password"
                    name={name}
                    onBlur={defineError}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                {children}
            </div>
            {location === "register" ? (
                <button
                    className="text-xs text-secondary_text"
                    type="button"
                    onClick={() => setPassword(randomPassword)}
                >
                    Generar contraseña aleatoria
                </button>
            ) : null}
            {error ? (
                <Error
                    className={`text-busy text-sm mt-1 opacity-60 ${errorClassName} self-end`}
                    message={error}
                />
            ) : null}
            {location === "register" ? <LevelSecurityPassword password={password} /> : null}
        </>
    )
}

export default Input
