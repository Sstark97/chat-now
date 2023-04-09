import { SECURITY_LEVEL, CHARACTERS } from "@lib/const"

/**
 * @description Función que devuelve el nivel de seguridad de una contraseña
 * @param {string} password - Contraseña a evaluar
 * @returns {string} Nivel de seguridad de la contraseña
 * @example getLevelOfSecurityFrom("12345678") // "Baja"
 */
const getLevelOfSecurityFrom = (password: string) => {
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

    if (validations === 2) {
        return SECURITY_LEVEL.MEDIUM
    } else if (validations === 3 || validations === 4) {
        return SECURITY_LEVEL.HIGH
    } else {
        return SECURITY_LEVEL.LOW
    }
}

/**
 * @description Función que devuelve una contraseña aleatoria
 * @returns {string} Contraseña aleatoria
 * @example randomPassword() // "a1B2c3D4e5F6g7H8i9J0"¡
 */
const randomPassword = () => {
    let password = ""
    const requirements = [/[A-Z]/, /[a-z]/, /[0-9]/, /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/]

    while (password.length < 12 || !requirements.every((requirement) => requirement.test(password))) {
        password = ""
        for (let i = 0; i < 12; i++) {
            const randomIndex = Math.floor(Math.random() * CHARACTERS.length)
            password += CHARACTERS[randomIndex]
        }
    }
    return password
}

export { getLevelOfSecurityFrom, randomPassword }
