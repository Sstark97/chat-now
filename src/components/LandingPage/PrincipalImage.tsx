import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

/**
 * Este componente se encarga de mostrar la imagen principal de la landing page
 * @returns component
 * @example <PrincipalImage />
 */
const PrincipalImage = () => {
    const [text, setText] = useState("cuando")

    useEffect(() => {
        const intervalId = setInterval(() => {
            const options = ["cuando", "como", "con quien", "donde"]
            const random = Math.floor(Math.random() * options.length)
            const randomText = options[random]
            setText(randomText)
        }, 3000)

        return () => clearInterval(intervalId)
    }, [])

    // function randomText() {
    //     const options = ["cuando", "como", "con quien", "donde"]
    //     const random = Math.floor(Math.random() * options.length)
    //     const randomText = options[random]

    //     return randomText
    // }

    return (
        <div className="mx-auto w-[85%] h-[27rem] lg:w-[97%] lg:h-[50rem] relative mb-8">
            <Image
                src="/ImgHead.jpg"
                alt="ImgHead"
                width={1000}
                height={500}
                className="w-full h-full rounded-xl object-cover mx-auto mt-5 brightness-[.70]"
                priority
            />
            <div className="w-full absolute bottom-10 left-0 lg:bottom-28 lg:pl-32 text-white text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl">Contacta</h1>
                <p key={text} className="text-2xl lg:text-4xl mb-6 lg:mb-10">
                    <span className="animacion">{text}&nbsp;</span>
                    {/* https://funnyfrontend.com/efectos-texto-css-svg-html/ */}
                    quieras
                </p>
                <Link
                    href="/login"
                    className="px-8 py-2 lg:px-9 lg:py-3 bg-light_purple rounded-lg text-black text-lg lg:text-xl"
                >
                    Comienza ya
                </Link>
            </div>
        </div>
    )
}

export default PrincipalImage
