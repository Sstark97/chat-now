/**
 * @description Enumerado con los textos de los inputs de registro
 * @constant
 * @type {Object}
 * @property {string} NAME - Texto del input de nombre
 * @property {string} EMAIL - Texto del input de correo electrónico
 * @property {string} PASSWORD - Texto del input de contraseña
 */
enum INPUT_REGISTER_PLACEHOLDER {
    NAME = "Nombre",
    EMAIL = "Correo electrónico",
    PASSWORD = "Contraseña",
}

/**
 * @description Enumerado con los textos de los inputs de login
 * @constant
 * @type {Object}
 * @property {string} EMAIL - Texto del input de correo electrónico
 * @property {string} PASSWORD - Texto del input de contraseña
 */
enum INPUT_LOGIN_PLACEHOLDER {
    EMAIL = "Escribe tu email",
    PASSWORD = "Escribe tu contraseña",
}

/**
 * @description Enumerado con los textos de los botones de login y registro
 * @constant
 * @type {Object}
 * @property {string} LOGIN - Texto del botón de login
 * @property {string} REGISTER - Texto del botón de registro
 * @property {string} RANDOM_PASSWORD - Texto del botón de contraseña aleatoria
 */
enum AUTH_BUTTONS {
    LOGIN = "Iniciar sesión",
    REGISTER = "Crear cuenta",
    RANDOM_PASSWORD = "Generar contraseña aleatoria",
}

export { INPUT_REGISTER_PLACEHOLDER, INPUT_LOGIN_PLACEHOLDER, AUTH_BUTTONS }
