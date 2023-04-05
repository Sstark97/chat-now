import { FormEvent, useContext, useEffect, useState } from "react"
import { ChatContext } from "@context/ChatProvider"
import type { InputError } from "@customTypes/components"

const useControlInput = (errorManager: InputError | undefined) => {
    const [error, setError] = useState("")
    const [border, setBorder] = useState("")
    const { handleSetErrorsInForm } = useContext(ChatContext)

    useEffect(() => {
        handleSetErrorsInForm()
    }, [border, handleSetErrorsInForm])

    const defineError = (e: FormEvent<HTMLInputElement>) => {
        if (errorManager) {
            const element = e.currentTarget
            setError(errorManager.validate(element.value) ? "" : errorManager.errorMessage)
            setBorder(errorManager.validate(element.value) ? "border-2 border-success" : "border-2 border-busy")
        }
    }

    return { error, border, defineError }
}

export default useControlInput
