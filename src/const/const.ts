export const errors = {
    email: {
        errorMessage: "El email no es válido",
        regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        validate: (value: string) => errors.email.regex.test(value),
    },
}
