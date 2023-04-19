/**
 * @description Función para comparar dos objetos
 * @param data: object
 * @param contacts: object
 * @returns {boolean}
 * @example
 * const areEquals = equals(data, contacts)
 */
const equals = (data: object, contacts: object) => JSON.stringify(data) !== JSON.stringify(contacts)

export { equals }
