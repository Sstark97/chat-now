import { MutableRefObject } from "react"

interface Context {
    ref: MutableRefObject<HTMLDivElement>
    error: boolean
    handleSetErrorsInForm(): void
}

export type { Context }
