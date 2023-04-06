export const errors = {
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
}
