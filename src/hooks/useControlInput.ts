import { FormEvent, useEffect, useState } from "react"
import useChatContext from "@hooks/useChatContext"
import type { InputError } from "@customTypes/components"
import { EMPTY_ERROR } from "@lib/constants/validations"

/**
 * @description Hook para controlar los inputs
 * @param errorManager {InputError | undefined}
 * @returns {{error: string, border: string, defineError: (function(*): void)}}
 * @example
 * const { error, border, defineError } = useControlInput(errorManager)
 */
const useControlInput = (errorManager: InputError | undefined) => {
    const [error, setError] = useState("")
    const [border, setBorder] = useState("")
    const { handleSetErrorsInForm } = useChatContext()

    useEffect(() => {
        if (errorManager) {
            handleSetErrorsInForm()
        }
    }, [errorManager, border, handleSetErrorsInForm])

    /**
     * Esta función se encarga de obtener el mensaje de error
     * @private
     * @param {string} value
     * @returns {string}
     */
    const getErrorMessageFrom = (value: string) =>
        value === "" ? EMPTY_ERROR : errorManager?.message

    /**
     * Esta función se encarga de definir el error
     * @param {FormEvent<HTMLInputElement>} e
     * @returns {void}
     */
    const defineError = (e: FormEvent<HTMLInputElement>) => {
        if (errorManager) {
            const element = e.currentTarget
            const errorMsg = getErrorMessageFrom(element.value) as string
            setError(errorManager.validate(element.value) ? "" : errorMsg)
            setBorder(
                errorManager.validate(element.value)
                    ? "border-2 border-success"
                    : "border-2 border-busy"
            )
        }
    }

    return { error, border, defineError }
}

export default useControlInput
