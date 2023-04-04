export const errors = {
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