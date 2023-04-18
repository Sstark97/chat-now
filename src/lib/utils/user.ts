/**
 * @description Función para obtener los inputs de un formulario
 * @param current
 * @returns {HTMLInputElement[]}
 * @example
 * const allInputs = getInputsFrom(current)
 */
const getInputsFrom = (current: HTMLDivElement) =>
    Array.from(current.children)
        .map((div) => Array.from(div.children))
        .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], [])
        .filter((child) => child.nodeName === "INPUT")

/**
 * @description Función para obtener los datos de un formulario
 * @param current {HTMLDivElement}
 * @returns {Record<string, string>}
 * @example
 * const user = getUserDataFrom(current)
 */
const getUserDataFrom = (current: HTMLDivElement) => {
    const allInputs = getInputsFrom(current)

    const allFormattedInputs = allInputs.map((element) => {
        const input = element as HTMLInputElement

        return {
            [input.name]: input.value,
        }
    })

    return allFormattedInputs.reduce(
        (total: Record<string, string>, current: Record<string, string>) => {
            return { ...total, ...current }
        },
        {}
    )
}

/**
 * @description Función para validar un formulario
 * @param current
 * @returns {boolean}
 * @example
 * const isFormValid = isFormValid(current)
 */
const isFormValid = (current: HTMLDivElement) => {
    const allInputs = getInputsFrom(current)

    return allInputs.every((element) => {
        const input = element as HTMLInputElement

        return input.className.includes("border-success")
    })
}

export { getUserDataFrom, isFormValid }
