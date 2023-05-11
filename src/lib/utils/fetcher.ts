/**
 * @description Función para hacer una petición GET a un endpoint
 * @param endPoint
 * @returns {Promise<any>}
 * @example
 * const response = await getFrom(endPoint)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getFrom<C>(endPoint: string) {
    const res = await fetch(endPoint, {
        method: "GET",
        headers: { "Content-type": "application/json" },
    })

    const data = await res.json()

    if (!res.ok) throw new Error(data.message)

    return data
}

/**
 * @description Función para hacer una petición POST a un endpoint
 * @param body
 * @param endPoint
 * @param type
 * @returns {Promise<any>}
 * @example
 * const response = await postFrom(body, endPoint)
 */
async function changeFrom<C>(
    body: Record<keyof C, string> | undefined,
    endPoint: string,
    type: string
) {
    const res = await fetch(endPoint, {
        method: type,
        body: JSON.stringify(body),
        headers: { "Content-type": "application/json" },
    })

    const data = await res.json()

    if (!res.ok) throw new Error(data.message)

    return data
}

/**
 * @description Función para hacer una petición DELETE a un endpoint
 * @param body
 * @param endPoint
 * @returns {Promise<any>}
 * @example
 * const response = await deleteFrom(body, endPoint)
 */
async function deleteFrom<C>(body: Record<keyof C, string> | undefined, endPoint: string) {
    const res = await fetch(endPoint, {
        method: "DELETE",
        body: JSON.stringify(body),
        headers: { "Content-type": "application/json" },
    })

    const data = await res.json()

    if (!res.ok) throw new Error(data.message)

    return data
}

export { getFrom, changeFrom, deleteFrom }
