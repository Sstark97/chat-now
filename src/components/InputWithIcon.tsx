import Input from "@components/Input"
import { InputProps } from "@customTypes/components"

const InputWithIcon = ({ children, className, type, placeholder, name, errorManager }: InputProps) => {
    return (
        <Input className={className} type={type} placeholder={placeholder} name={name} errorManager={errorManager}>
            {children}
        </Input>
    )
}

export default InputWithIcon
