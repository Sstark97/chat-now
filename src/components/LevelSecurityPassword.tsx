/**
 * a
 */
const LevelSecurityPassword = ({ password }: { password: string }) => {
    const comprobePassword = () => {
        let validations = 0

        if (password.length > 6 || password.length < 40) {
            if (/.*[A-Z].*/.test(password)) {
                validations++
            }

            if (/.*[a-z].*/.test(password)) {
                validations++
            }

            if (/.*[0-9].*/.test(password)) {
                validations++
            }

            if (/.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?].*/.test(password)) {
                validations++
            }
        }

        switch (validations) {
            case 1:
                return "Baja"
                break
            case 2:
                return "Media"
                break
            case 3:
            case 4:
                return "Alta"
                break
        }
    }

    return (
        <div className="w-full mt-2 flex flex-row items-center justify-between">
            <p className="w-[60%] text-xs">
                Nivel de seguridad: <span className="text-secondary_text">{comprobePassword()}</span>
            </p>
            <div className="w-[35%] h-[.5rem] flex justify-between">
                <div className="w-[30%] bg-secondary_text rounded-lg"></div>
                <div className="w-[30%] bg-secondary_text rounded-lg"></div>
                <div className="w-[30%] bg-secondary_text rounded-lg"></div>
            </div>
        </div>
    )
}

export default LevelSecurityPassword
