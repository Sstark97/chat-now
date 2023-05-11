/**
 * @description Enumerado con los valores de los estados de los usuarios
 * @type {Object}
 * @constant
 * @property {string} online - Estado de usuario disponible
 * @property {string} busy - Estado de usuario ocupado
 * @property {string} absent - Estado de usuario ausente
 * @property {string} offline - Estado de usuario desconectado
 */
enum STATE_VALUES {
    online = "Disponible",
    busy = "Ocupado",
    absent = "Ausente",
    offline = "Desconectado",
}

/**
 * @description Array con los valores de los estados de los usuarios
 * @type {Object}
 * @constant
 * @property {string} value - Valor del estado
 * @property {string} label - Etiqueta del estado
 */
const STATE_VALUES_ARRAY = Object.keys(STATE_VALUES).map((key) => {
    return {
        value: key,
        label: STATE_VALUES[key as keyof typeof STATE_VALUES],
    }
})

export { STATE_VALUES, STATE_VALUES_ARRAY }
