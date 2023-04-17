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

/**
 * @description Enumerado con los colores de los estados de los usuarios
 * @constant
 * @type {Object}
 * @property {string} online - Color del estado online
 * @property {string} busy - Color del estado ocupado
 * @property {string} absent - Color del estado ausente
 * @property {string} offline - Color del estado offline
 */
enum STATE_COLORS {
    online = "success",
    busy = "busy",
    absent = "absent",
    offline = "offline",
}

export { SECURITY_LEVEL, SECURITY_LEVEL_COLORS, STATE_COLORS }
