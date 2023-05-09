import Image from "next/image"
import Link from "next/link"
import { OPTIONS } from "@lib/constants/landing"

/**
 * Este componente se encarga de mostrar la imagen principal de la landing page
 * @returns component
 * @example <PrincipalImage />
 */
const Hero = () => {
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
                <div className="flex justify-center lg:justify-start text-2xl h-10 lg:text-4xl mb-6 lg:mb-10">
                    <div className="overflow-hidden">
                        <ul className="animate-change">
                            {OPTIONS.map((option) => (
                                <li key={option} className="capitalize leading-10 mr-3">
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="mt-1 lg:mt-0">quieras</p>
                </div>
                <Link
                    href="/login"
                    className="px-8 py-2 lg:px-9 lg:py-3 bg-light_purple dark:bg-dark_purple rounded-lg text-black dark:text-white text-lg lg:text-xl"
                >
                    Comienza ya
                </Link>
            </div>
        </div>
    )
}

export default Hero
