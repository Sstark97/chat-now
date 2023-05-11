/**
 * Esta función recibe un texto y devuelve el mismo texto con la primera letra en mayúscula.
 * @param {string} text
 * - Texto a capitalizar
 * @returns {string} text
 * - Texto capitalizado
 * @example
 * capitalizeFirstLetter("hola") // "Hola"
 */
const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

export { capitalizeFirstLetter }
