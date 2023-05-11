/**
 * @description String con todos los caracteres posibles para la contraseña
 * @type {string}
 * @constant
 */
const CHARACTERS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{};':\\|,.<>/?"
/**
 * @description String con el mensaje de error de un campo vacío
 * @type {string}
 * @constant
 */
const EMPTY_ERROR = "Hmm... parece que este campo es obligatorio"
/**
 * @description Objeto con los errores de validación de los formularios
 * @type {Object}
 * @constant
 * @property {Object} name - Objeto con los errores de validación del nombre
 * @property {Object} email - Objeto con los errores de validación del email
 * @property {Object} password - Objeto con los errores de validación de la contraseña
 */
const errors = {
    name: {
        message: "El nombre debe tener entre 4 y 20 caracteres",
        regex: /^.{4,20}$/,
        validate: (value: string) => errors.name.regex.test(value),
    },
    email: {
        message: "El correo está mal formado",
        regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        validate: (value: string) => errors.email.regex.test(value),
    },
    security: {
        message: "La contraseña debe tener entre 6 y 40 caracteres",
        regex: /^.{6,40}$/,
        validate: (value: string) => errors.security.regex.test(value),
    },
}
export { CHARACTERS, EMPTY_ERROR, errors }
