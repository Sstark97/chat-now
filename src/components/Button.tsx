import useChatContext from "@hooks/useChatContext"
import type { ButtonProps } from "@customTypes/components"

/**
 * Este componente es el encargado de mostrar un botón
 * @param {ButtonProps} { value, action } - value: texto del botón, action: función a ejecutar al hacer click
 * @returns component
 * @example <Button value="Iniciar sesión" action={login}/>
 */
const Button = ({ value, action }: ButtonProps) => {
    const { error } = useChatContext()

    return (
        <button
            className="w-full bg-light_purple dark:bg-dark_purple dark:text-white py-2 mt-5 md:mt-6 text-[1.15rem] rounded-xl shadow-lg brightness-100 disabled:brightness-75 active:translate-y-[2%] active:shadow-md disabled:active:translate-y-[0%] disabled:active:shadow-lg"
            type="button"
            onClick={action}
            disabled={error}
        >
            {value}
        </button>
    )
}

export default Button
