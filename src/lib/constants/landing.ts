import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const OPTIONS = ["cuando", "donde", "cuanto"]

const SOCIAL_ICONS = [FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter]

const ABOUT = ["Sobre nosotros", "Privacidad", "Contáctanos"]

enum FEATURE_HEADER {
    SHARE = "Comparte lo que quieras",
    SPEAK = "Habla con libertad",
    COMMUNITY = "Únete a comunidades",
}

enum FEATURE_DESCRIPTION {
    SHARE = "Envía y recibe mensajes, notas de voz, vídeos, GIFs y archivos, de manera gratuita. cuando y donde quieras.",
    SPEAK = "Haz llamadas y videollamas de gran calidad con aquellas personas que vivan lejos de ti.",
    COMMUNITY = "Conéctate con cientos de personas que compartan tus mismos gustos y aficiones.",
}

export { OPTIONS, SOCIAL_ICONS, ABOUT, FEATURE_HEADER, FEATURE_DESCRIPTION }
