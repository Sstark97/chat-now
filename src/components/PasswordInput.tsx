import { useState } from "react"
import Input from "@components/Input"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { errors } from "@lib/const"
import { PasswordProps } from "@customTypes/components"

/**
 * Este componente es el encargado de mostrar un input de tipo password
 * @param {string} placeholder
 * @param {boolean} validate
 * @param {string} name
 * @returns component
 * @example <PasswordInput placeholder="Contraseña" />
 */
const PasswordInput = ({ placeholder, validate, name }: PasswordProps) => {
    const [showPassword, setShowPassword] = useState(false)
    const iconClass = "absolute top-8 right-4 fill-white text-xl lg:text-2xl"

    /**
     * Este método es el encargado de mostrar u ocultar la contraseña
     */
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <Input type={showPassword ? "text" : "password"} placeholder={placeholder} name={name ? name : "password"} errorManager={validate ? errors.security : undefined}>
            {showPassword ? <AiFillEyeInvisible className={iconClass} onClick={handleShowPassword} /> : <AiFillEye className={iconClass} onClick={handleShowPassword} />}
        </Input>
    )
}

export default PasswordInput
