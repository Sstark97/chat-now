import { getLevelOfSecurityFrom } from "@lib/utils/password"
import { SECURITY_LEVEL, SECURITY_LEVEL_COLORS } from "@lib/constants/securityPassword"

/**
 * Este hook que devuelve el nivel de seguridad de una contraseña
 * @param {string} password - Contraseña
 * @returns {string} passwordSecurityLevel - Nivel de seguridad de la contraseña
 * @returns {string} bgFirstLevel - Color del primer círculo de seguridad
 * @returns {string} bgSecondLevel - Color del segundo círculo de seguridad
 * @returns {string} bgThirdLevel - Color del tercer círculo de seguridad
 */
const useLevelOfSecurity = (password: string) => {
    const passwordSecurityLevel = getLevelOfSecurityFrom(password)
    const bgFirstLevel = SECURITY_LEVEL_COLORS[passwordSecurityLevel] ?? "secondary_text"
    const bgSecondLevel =
        passwordSecurityLevel === SECURITY_LEVEL.MEDIUM ||
        passwordSecurityLevel === SECURITY_LEVEL.HIGH
            ? SECURITY_LEVEL_COLORS[passwordSecurityLevel]
            : "secondary_text"
    const bgThirdLevel =
        passwordSecurityLevel === SECURITY_LEVEL.HIGH
            ? SECURITY_LEVEL_COLORS[passwordSecurityLevel]
            : "secondary_text"

    return { passwordSecurityLevel, bgFirstLevel, bgSecondLevel, bgThirdLevel }
}

export default useLevelOfSecurity
