/**
 * @description Enumerado con las rutas de la API
 * @constant
 * @type {Object}
 * @property {string} REGISTER - Ruta de registro de usuario
 * @property {string} LOGIN - Ruta de login de usuario
 */
enum API {
    REGISTER = "/api/auth/user/register",
    LOGIN = "/api/auth/user/login",
}

/**
 * @description Enumerado con las rutas de redirección
 * @constant
 * @type {Object}
 * @property {string} HOME - Ruta de redirección a la página de inicio
 * @property {string} LOGIN - Ruta de redirección a la página de login
 */
enum REDIRECT {
    HOME = "/",
    LOGIN = "/login",
}

/**
 * @description Objeto con los errores de validación de los formularios
 * @constant
 * @type {Object}
 * @property {Object} name - Objeto con los errores de validación del nombre
 * @property {Object} email - Objeto con los errores de validación del email
 * @property {Object} password - Objeto con los errores de validación de la contraseña
 * @property {Object} strictPassword - Objeto con los errores de validación de la contraseña estricta
 */
const errors = {
    name: {
        errorMessage: "El nombre debe tener entre 4 y 20 caracteres",
        regex: /^.{4,20}$/,
        validate: (value: string) => errors.name.regex.test(value),
    },
    email: {
        errorMessage: "El correo está mal formado",
        regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        validate: (value: string) => errors.email.regex.test(value),
    },
    security: {
        errorMessage: "La contraseña debe tener entre 6 y 40 caracteres",
        regex: /^.{6,40}$/,
        validate: (value: string) => errors.security.regex.test(value),
    },
}

export { API, REDIRECT, errors }
