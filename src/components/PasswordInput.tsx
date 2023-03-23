import { useState } from "react"
import Input from "@components/Input"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

const PasswordInput = ({ placeholder }: { placeholder: string }) => {
    const [showPassword, setShowPassword] = useState(false)
    const iconClass = "absolute top-8 right-4 fill-white text-xl lg:text-2xl"

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <Input type={showPassword ? "text" : "password"} placeholder={placeholder}>
            {showPassword ? <AiFillEyeInvisible className={iconClass} onClick={handleShowPassword} /> : <AiFillEye className={iconClass} onClick={handleShowPassword} />}
        </Input>
    )
}

export default PasswordInput
