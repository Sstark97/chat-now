import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

/**
 * @description Opciones del navbar
 * @type {string[]}
 * @constant
 */
const OPTIONS = ["cuando", "donde", "cuanto"]

/**
 * @description Iconos de las redes sociales
 * @type {React.FC[]}
 * @constant
 */
const SOCIAL_ICONS = [FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter]

/**
 * @description Opciones del footer
 * @type {string[]}
 * @constant
 */
const ABOUT = ["Sobre nosotros", "Privacidad", "Contáctanos"]

/**
 * @description Cabeceras de las características
 * @enum {string}
 * @constant
 */
enum FEATURE_HEADER {
    SHARE = "Comparte lo que quieras",
    SPEAK = "Habla con libertad",
    COMMUNITY = "Únete a comunidades",
}

/**
 * @description Descripciones de las características
 * @enum {string}
 * @constant
 */
enum FEATURE_DESCRIPTION {
    SHARE = "Envía y recibe mensajes, notas de voz, vídeos, GIFs y archivos, de manera gratuita. cuando y donde quieras.",
    SPEAK = "Haz llamadas y videollamas de gran calidad con aquellas personas que vivan lejos de ti.",
    COMMUNITY = "Conéctate con cientos de personas que compartan tus mismos gustos y aficiones.",
}

export { OPTIONS, SOCIAL_ICONS, ABOUT, FEATURE_HEADER, FEATURE_DESCRIPTION }
