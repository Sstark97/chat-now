import type { ButtonProps } from "@customTypes/components"

/**
 * Este componente es el encargado de mostrar un botón
 * @param {string} value
 * @returns component
 * @example <Button value="Iniciar sesión" />
 */
const Button = ({ value }: ButtonProps) => {

    function click(){
        console.log("Me han pulsado")
    }

    return (
        <button onClick={() => click()} className="w-4/5 bg-light_purple py-3 text-[1.15rem] rounded-xl shadow-lg hover:brightness-110 active:translate-y-[2%] active:shadow-md">{ value }</button>
    )
}

export default Button
