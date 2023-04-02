async function postFrom<C>(credentials: Record<keyof C, string> | undefined, endPoint: string) {
    const res = await fetch(endPoint, {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: { "Content-type": "application/json" },
    })

    return await res.json()
}

export { postFrom }
