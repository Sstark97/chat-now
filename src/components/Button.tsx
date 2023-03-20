import type { ButtonProps } from "@customTypes/components"

const Button = ({ value }: ButtonProps) => {

    function click(){
        console.log("Me han pulsado")
    }

    return (
        <button onClick={() => click()} className="">{ value }</button>
    )
}

export default Button
