/**
 * @description Función para hacer una petición POST a un endpoint
 * @param credentials
 * @param endPoint
 * @returns {Promise<any>}
 * @example
 * const response = await postFrom(credentials, endPoint)
 */
async function postFrom<C>(credentials: Record<keyof C, string> | undefined, endPoint: string) {
    const res = await fetch(endPoint, {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: { "Content-type": "application/json" },
    })

    const data = await res.json()

    if (!res.ok) throw new Error(data.message)

    return data
}

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

export { postFrom, getFrom }
