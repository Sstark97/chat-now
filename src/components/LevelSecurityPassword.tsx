import useLevelOfSecurity from "@hooks/useLevelOfSecurity"
import type { LevelOfSecurityProps } from "@customTypes/components"

const LevelSecurityPassword = ({ password }: LevelOfSecurityProps) => {
    const passwordHaveTheNecessaryLength = password.length >= 6 && password.length <= 40
    const generalClass = "w-[30%] rounded-lg"
    const { passwordSecurityLevel, bgFirstLevel, bgSecondLevel, bgThirdLevel } = useLevelOfSecurity(password)

    return (
        <>
            {passwordHaveTheNecessaryLength ? (
                <div className="w-full mt-2 flex flex-row items-center justify-between">
                    <p className="w-[60%] text-xs">
                        Nivel de seguridad: <span className={`text-${bgFirstLevel}`}>{passwordSecurityLevel}</span>
                    </p>
                    <div className="w-[35%] h-[.5rem] flex justify-between">
                        <div className={`${generalClass} bg-${bgFirstLevel}`}></div>
                        <div className={`${generalClass} bg-${bgSecondLevel}`}></div>
                        <div className={`${generalClass} bg-${bgThirdLevel}`}></div>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default LevelSecurityPassword
