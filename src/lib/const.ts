import { IoIosChatboxes } from "react-icons/io"
import { HiUsers } from "react-icons/hi"
import { IoSettingsSharp } from "react-icons/io5"

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
 * @description String con todos los caracteres posibles para la contraseña
 * @constant
 * @type {string}
 */
const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{};':\\|,.<>/?"

/**
 * @description String con el mensaje de error de un campo vacío
 * @constant
 * @type {string}
 */
const EMPTY_ERROR = "Hmm... parece que este campo es obligatorio"

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

const principalLinks = [
    { href: "/", icon: IoIosChatboxes },
    { href: "/contacts", icon: HiUsers },
    { href: "/settings", icon: IoSettingsSharp },
]

/**
 * @description Enumerado con los niveles de seguridad de la contraseña
 * @constant
 * @type {Object}
 * @property {string} LOW - Nivel de seguridad bajo
 * @property {string} MEDIUM - Nivel de seguridad medio
 * @property {string} HIGH - Nivel de seguridad alto
 */
enum SECURITY_LEVEL {
    LOW = "Baja",
    MEDIUM = "Media",
    HIGH = "Alta",
}

/**
 * @description Enumerado con los colores de los niveles de seguridad de la contraseña
 * @constant
 * @type {Object}
 * @property {string} Baja - Color del nivel de seguridad bajo
 * @property {string} Media - Color del nivel de seguridad medio
 * @property {string} Alta - Color del nivel de seguridad alto
 */
enum SECURITY_LEVEL_COLORS {
    Baja = "busy",
    Media = "medium_security",
    Alta = "success",
}

export { API, REDIRECT, EMPTY_ERROR, errors, SECURITY_LEVEL, SECURITY_LEVEL_COLORS, CHARACTERS, principalLinks }
