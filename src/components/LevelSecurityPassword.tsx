import { getLevelOfSecurityFrom } from "@lib/utils/password"
import { SECURITY_LEVEL, SECURITY_LEVEL_COLORS } from "@lib/const"

const LevelSecurityPassword = ({ password }: { password: string }) => {
    const generalClass = "w-[30%] rounded-lg"
    const passwordSecurityLevel = getLevelOfSecurityFrom(password)
    const bgFirstLevel = SECURITY_LEVEL_COLORS[passwordSecurityLevel] ?? "secondary_text"
    const bgSecondLevel = passwordSecurityLevel === SECURITY_LEVEL.MEDIUM || passwordSecurityLevel === SECURITY_LEVEL.HIGH ? SECURITY_LEVEL_COLORS[passwordSecurityLevel] : "secondary_text"
    const bgThirdLevel = passwordSecurityLevel === SECURITY_LEVEL.HIGH ? SECURITY_LEVEL_COLORS[passwordSecurityLevel] : "secondary_text"

    return (
        <>
            {password.length >= 6 && password.length <= 40 ? (
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
