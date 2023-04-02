async function postFrom<C>(credentials: Record<keyof C, string> | undefined, endPoint: string) {
    return await fetch(endPoint, {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: { "Content-type": "application/json" },
    })
}

export { postFrom }
