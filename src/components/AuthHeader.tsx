import Image from "next/image"
import type { AuthHeaderProps } from "@customTypes/components"

const AuthHeader = ({ title }: AuthHeaderProps) => {

    function click(){
        console.log("Me han pulsado")
    }

    return (
        <section className="w-full flex flex-col items-center">
            <Image src="/logo.png" alt="Logo" width={70} height={70}/>
            <h1 className="text-3xl font-bold pt-2 md:text-sm">{title}</h1>
            <p className="text-sm font-normal pt-2 text-secondary_text">Por favor, inserte sus datos</p>
        </section>
    )
}

export default AuthHeader
