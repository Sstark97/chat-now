import { useState } from "react"
import Input from "@components/Input"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

/**
 * Este componente es el encargado de mostrar un input de tipo password
 * @param {string} placeholder
 * @returns component
 * @example <PasswordInput placeholder="Contraseña" />
 */
const PasswordInput = ({ placeholder }: { placeholder: string }) => {
    const [showPassword, setShowPassword] = useState(false)
    const iconClass = "absolute top-8 right-4 fill-white text-xl lg:text-2xl"

    /**
     * Este método es el encargado de mostrar u ocultar la contraseña
     */
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <Input type={showPassword ? "text" : "password"} placeholder={placeholder} name="password">
            {showPassword ? <AiFillEyeInvisible className={iconClass} onClick={handleShowPassword} /> : <AiFillEye className={iconClass} onClick={handleShowPassword} />}
        </Input>
    )
}

export default PasswordInput
