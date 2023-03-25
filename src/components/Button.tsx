import type { ButtonProps } from "@customTypes/components"

/**
 * Este componente es el encargado de mostrar un botón
 * @param {string} value
 * @returns component
 * @example <Button value="Iniciar sesión" />
 */
const Button = ({ value }: ButtonProps) => {
    function click() {
        console.log("Me han pulsado")
    }

    return (
        <button onClick={() => click()} className="w-full bg-light_purple py-2 mt-5 md:mt-6 text-[1.15rem] rounded-xl shadow-lg hover:brightness-110 active:translate-y-[2%] active:shadow-md">
            { value }
        </button>
    )
}

export default Button
