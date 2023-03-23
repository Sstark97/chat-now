import Image from "next/image"
import type { AuthHeaderProps } from "@customTypes/components"

const AuthHeader = ({ title }: AuthHeaderProps) => {
    return (
        <section className="w-full flex flex-col items-center">
            <Image src="/logo.png" alt="Logo" width={70} height={70} className="md:w-[12%]"/>
            <h1 className="text-3xl font-bold pt-2 md:text-4xl md:pt-4">{title}</h1>
            <p className="text-sm font-normal pt-2 text-secondary_text md:text-lg md:pt-3 md:pb-5">Por favor, inserte sus datos</p>
        </section>
    )
}

export default AuthHeader
