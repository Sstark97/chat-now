import { useState } from "react"
import Input from "@components/Input"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { PasswordProps } from "@customTypes/components"
import { errors } from "@lib/constants/validations"

/**
 * Este componente es el encargado de mostrar un input de tipo password
 * @param {PasswordProps} { placeholder, validate, location, className, notRequired, children }
 * - placeholder: Placeholder del input
 * - validate: Si se debe validar el input
 * - location: Ubicación del input
 * - className: Clases del input
 * - notRequired: Si el input no es requerido
 * - children: Componente hijo
 * @returns component
 * @example <PasswordInput />
 */
const PasswordInput = ({
    placeholder,
    validate,
    location,
    className,
    notRequired,
    children,
}: PasswordProps) => {
    const [showPassword, setShowPassword] = useState(false)
    const iconClass = "absolute top-8 right-4 fill-white text-xl lg:text-2xl"

    /**
     * Esta función es la encargada de mostrar u ocultar la contraseña
     * @returns void
     * @example <button onClick={handleShowPassword} />
     */
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <Input
            className={className}
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            name="password"
            errorManager={validate ? errors.security : undefined}
            location={location}
            notRequired={notRequired}
        >
            {children}
            {showPassword ? (
                <AiFillEyeInvisible className={iconClass} onClick={handleShowPassword} />
            ) : (
                <AiFillEye className={iconClass} onClick={handleShowPassword} />
            )}
        </Input>
    )
}

export default PasswordInput
