import { NavBarLinks } from "@customTypes/components"
import { IoIosChatboxes } from "react-icons/io"
import { HiUsers } from "react-icons/hi"
import { IoSettingsSharp } from "react-icons/io5"
import * as process from "process"

/**
 * @description Enumerado con las rutas de la API
 * @constant
 * @type {Object}
 * @property {string} SOCKET - Ruta de la API para inicializar el socket
 * @property {string} REGISTER - Ruta de la API para registrar un usuario
 * @property {string} LOGIN - Ruta de la API para loguear un usuario
 * @property {string} ADD_CONTACT - Ruta de la API para añadir un contacto
 * @property {string} GET_CONTACTS - Ruta de la API para obtener los contactos
 * @property {string} MODIFY_CONTACT - Ruta de la API para modificar un contacto
 * @property {string} DELETE_CONTACT - Ruta de la API para eliminar un contacto
 * @property {string} EDIT_USER - Ruta de la API para editar un usuario
 * @property {string} DELETE_USER - Ruta de la API para eliminar un usuario
 * @property {string} CHANGE_STATUS - Ruta de la API para cambiar el estado de un usuario
 */
enum API {
    REGISTER = "/api/auth/user/register",
    LOGIN = "/api/auth/user/login",
    ADD_CONTACT = "/api/contacts/add",
    GET_CONTACTS = "/api/contacts",
    MODIFY_CONTACT = "/api/contacts/edit",
    DELETE_CONTACT = "/api/contacts/delete",
    EDIT_USER = "/api/user/edit",
    DELETE_USER = "/api/user/delete",
    CHANGE_STATUS = "/api/user/changeStatus",
}

const SOCKET_SERVER = process.env.NEXT_PUBLIC_SOCKET_SERVER as string

/**
 * @description Enumerado con las rutas de redirección
 * @constant
 * @type {Object}
 * @property {string} HOME - Ruta de redirección a la página de inicio
 * @property {string} LOGIN - Ruta de redirección a la página de login
 * @property {string} LANDING - Ruta de redirección a la página de aterrizaje
 * @property {string} CONTACTS - Ruta de redirección a la página de contactos
 */
enum REDIRECT {
    HOME = "/",
    LOGIN = "/login",
    LANDING = "/landing",
    CONTACTS = "/contacts",
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

// noinspection JSValidateJSDoc
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

export { API, REDIRECT, NAVBAR_TITLES, SOCKET_SERVER, principalLinks }
