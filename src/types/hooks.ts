/**
 * @typedef {Object} UseForm
 * @description Hook para controlar los inputs
 * @property {function(): Promise<void>} action
 * @property {string} error
 */
interface UseForm {
    action: () => Promise<void>
    error: string
}

export type { UseForm }
