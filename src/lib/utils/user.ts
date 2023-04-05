function getInputsFrom(current: HTMLDivElement) {
    return Array.from(current.children)
        .map((div) => Array.from(div.children))
        .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], [])
        .filter((child) => child.nodeName === "INPUT")
}

const getUserDataFrom = (current: HTMLDivElement) => {
    const allInputs = getInputsFrom(current)

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

const isFormValid = (current: HTMLDivElement) => {
    const allInputs = getInputsFrom(current)

    console.log("GHG")

    return allInputs.every((element) => {
        const input = element as HTMLInputElement

        return input.className.includes("border-success")
    })
}

export { getUserDataFrom, isFormValid }
