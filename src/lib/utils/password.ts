import { SECURITY_LEVEL } from "@lib/const"

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

export { getLevelOfSecurityFrom }
