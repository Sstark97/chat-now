import { NavBarLinks } from "@customTypes/components"
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
    ADD_CONTACT = "/api/contacts/add",
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
 * @description Enumerado con los títulos de la barra de navegación
 * @constant
 * @type {Object}
 * @property {string} NEW_CONTACT - Título del link para añadir un nuevo contacto
 * @property {string} SETTINGS - Título del link para acceder a los ajustes
 * @property {string} HELP - Título del link para acceder a la ayuda
 * @property {string} MY_ACCOUNT - Título del link para acceder a la cuenta
 */
enum NAVBAR_TITLES {
    NEW_CONTACT = "Añadir un nuevo contacto",
    SETTINGS = "Ajustes",
    HELP = "Ayuda",
    MY_ACCOUNT = "Mi cuenta",
}

/**
 * @description Objeto con los links de la barra de navegación
 * @constant
 * @type {NavBarLinks[]}
 * @property {string} href - Ruta del link
 * @property {IconType} icon - Icono del link
 */
const principalLinks: NavBarLinks[] = [
    { href: "/", icon: IoIosChatboxes },
    { href: "/contacts", icon: HiUsers },
    { href: "/settings", icon: IoSettingsSharp },
]

export { API, REDIRECT, NAVBAR_TITLES, principalLinks }
