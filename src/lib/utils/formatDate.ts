import moment from "moment"
import { WEEK_DAY_NAME } from "../constants/formatDate"

/**
 * @description Formatea la fecha de un mensaje
 * @param {string} date Fecha del mensaje
 * @returns {string} Fecha formateada
 * @example
 * formatDate("2021-08-01T12:00:00.000Z") // "ayer"
 */
const formatDate = (date: string | undefined) => {
    const now = moment()
    const startOfToday = now.startOf("day")
    const startOfYesterday = now.clone().subtract(1, "day").startOf("day")
    const messageTime = moment(date)
    let displayTime = ""

    if (messageTime.isSameOrAfter(startOfToday)) {
        // Si el mensaje fue enviado hoy, mostrar la hora
        displayTime = messageTime.format("HH:mm")
    } else if (messageTime.isSameOrAfter(startOfYesterday)) {
        // Si el mensaje fue enviado ayer, mostrar "ayer"
        displayTime = "ayer"
    } else if (messageTime.isAfter(now.clone().subtract(7, "day"))) {
        // Si el mensaje fue enviado hace menos de una semana, mostrar el día de la semana
        const weekdayIndex = messageTime.weekday()
        displayTime = WEEK_DAY_NAME[weekdayIndex]
    } else {
        // Si el mensaje fue enviado hace más de una semana, mostrar la fecha
        displayTime = messageTime.format("DD/MM/YYYY")
    }

    return displayTime
}

export { formatDate }
