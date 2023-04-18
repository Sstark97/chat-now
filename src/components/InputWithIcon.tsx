import Input from "@components/Input"
import { InputProps } from "@customTypes/components"

const InputWithIcon = ({
    children,
    type,
    placeholder,
    name,
    errorManager,
    className,
    errorClassName,
}: InputProps) => {
    return (
        <Input
            className={className}
            type={type}
            placeholder={placeholder}
            name={name}
            errorManager={errorManager}
            errorClassName={errorClassName}
        >
            {children}
        </Input>
    )
}

export default InputWithIcon
