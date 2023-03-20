import { useState } from "react"
import Input from "@components/Input"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

const PasswordInput = ({ placeholder }: { placeholder: string }) => {
    const [showPassword, setShowPassword] = useState(false)
    const iconClass = "absolute top-0 right-0"

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div>
            <Input type={showPassword ? "text" : "password"} placeholder={placeholder} />
            {showPassword ? (
                <AiFillEyeInvisible
                    className={iconClass}
                    onClick={handleShowPassword}
                />
            ) : (
                <AiFillEye className={iconClass} onClick={handleShowPassword} />
            )}
        </div>
    )
}

export default PasswordInput
