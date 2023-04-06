enum API {
    REGISTER = "/api/auth/user/register",
    LOGIN = "/api/auth/user/login",
}

enum REDIRECT {
    HOME = "/",
    LOGIN = "/login",
}

const errors = {
    name: {
        errorMessage: "El nombre debe tener al menos 4 caracteres",
        regex: /^.{4,}$/,
        validate: (value: string) => errors.name.regex.test(value),
    },
    email: {
        errorMessage: "El email no es válido",
        regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        validate: (value: string) => errors.email.regex.test(value),
    },
    password: {
        errorMessage: "La contraseña debe tener al menos 8 caracteres",
        regex: /^.{8,}$/,
        validate: (value: string) => errors.password.regex.test(value),
    },
    strictPassword: {
        errorMessage: "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, número y un caracter especial",
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/,
        validate: (value: string) => errors.strictPassword.regex.test(value),
    },
}

export { API, REDIRECT, errors }
