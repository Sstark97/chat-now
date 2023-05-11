import Input from "@components/Input"
import { InputProps } from "@customTypes/components"

/**
 * Este componente es el encargado de mostrar un input con un icono
 * @param {InputProps} { children, type, placeholder, name, errorManager, className, errorClassName, value, disabled }
 * - children: Componente hijo
 * - type: Tipo de input
 * - placeholder: Placeholder del input
 * - name: Nombre del input
 * - errorManager: Función para manejar el error
 * - className: Clases del input
 * - errorClassName: Clases del error
 * - value: Valor del input
 * - disabled: Si el input está deshabilitado
 * @returns component
 * @example <InputWithIcon />
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
