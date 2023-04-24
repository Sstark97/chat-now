import Image from "next/image"
import { useEffect, useState } from "react"

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
        <div className="mx-auto w-[85%] h-[27rem] relative">
            <Image
                src="/ImgHead.jpg"
                alt="ImgHead"
                width={250}
                height={500}
                className="w-full h-full rounded-xl object-cover mx-auto mt-5 brightness-[.70]"
            />
            <div className="w-full absolute bottom-10 left-0 text-white text-center">
                <h1 className="text-4xl">Contacta</h1>
                <p key={text} className="text-2xl">
                    <span className="animacion">{text}&nbsp;</span>
                    {/* https://funnyfrontend.com/efectos-texto-css-svg-html/ */}
                    quieras
                </p>
                <button className="px-8 py-2 mt-5 bg-light_purple rounded-lg text-black text-lg">
                    Comienza ya
                </button>
            </div>
        </div>
    )
}

export default PrincipalImage
