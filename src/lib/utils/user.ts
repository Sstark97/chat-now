const getUserDataFrom = (current: HTMLDivElement) => {
    const allInputs = Array.from(current.children)
        .map((div) => Array.from(div.children))
        .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], [])
        .filter((child) => child.nodeName === "INPUT")

    const allFormattedInputs = allInputs.map((element) => {
        const input = element as HTMLInputElement

        return {
            [input.name]: input.value,
        }
    })

    return allFormattedInputs.reduce((total: Record<string, string>, current: Record<string, string>) => {
        return { ...total, ...current }
    }, {})
}

export { getUserDataFrom }
