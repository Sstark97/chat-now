import Input from "@components/Input"
import { InputProps } from "@customTypes/components"

/**
 * Este componente es el encargado de mostrar un input con un icono
 * @param {InputProps} { children, type, placeholder, name, errorManager, className, errorClassName } - children: componente a mostrar dentro del input, type: tipo de input, placeholder: texto de placeholder, name: nombre del input, errorManager: objeto que contiene la información del error, className: clase a aplicar al input, errorClassName: clase a aplicar al error
 * @returns component
 * @example <InputWithIcon type="text" placeholder="Nombre" name="name" errorManager={errorManager} location="register" />
 */
const InputWithIcon = ({
    children,
    type,
    placeholder,
    name,
    errorManager,
    className,
    errorClassName,
    value,
    disabled,
}: InputProps) => {
    return (
        <Input
            className={className}
            type={type}
            placeholder={placeholder}
            name={name}
            errorManager={errorManager}
            errorClassName={errorClassName}
            value={value}
            disabled={disabled}
        >
            {children}
        </Input>
    )
}

export default InputWithIcon
