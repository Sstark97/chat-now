import Image from "next/image"
import type { AuthHeaderProps } from "@customTypes/components"

const AuthHeader = ({ title }: AuthHeaderProps) => {
    return (
        <section className="w-full flex flex-col items-center">
            <Image src="/logo.png" alt="Logo" width={70} height={70} className="2xl:w-1/12" />
            <h1 className="text-3xl font-bold pt-2 2xl:text-4xl 2xl:pt-3">{title}</h1>
            <p className="text-sm font-normal pt-2 text-secondary_text 2xl:text-lg 2xl:pt-3">Por favor, inserte sus datos</p>
        </section>
    )
}

export default AuthHeader
