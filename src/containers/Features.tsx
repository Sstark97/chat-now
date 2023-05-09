import { AiFillFile } from "react-icons/ai"
import { BsCameraVideoFill } from "react-icons/bs"
import { IoMdPlay } from "react-icons/io"
import Image from "next/image"
import Feature from "@components/Feature"
import { FEATURE_HEADER, FEATURE_DESCRIPTION } from "@lib/constants/landing"

/**
 * Este componente contiene los 3 bloques de la sección de "Características" de la página de inicio.
 * @returns component
 * @example <Boxs />
 */
const Features = () => {
    return (
        <>
            <div className="mx-auto w-[85%] lg:w-[95%] mb-14 lg:flex lg:justify-between">
                <Feature header={FEATURE_HEADER.SHARE} description={FEATURE_DESCRIPTION.SHARE}>
                    <div className="w-1/2 flex items-center p-1 lg:p-2 border border-black dark:border-white bg-primary dark:bg-dark_primary rounded-lg mb-2">
                        <AiFillFile className="text-xl lg:text-2xl" />
                        <div className="w-[90%] pl-2">
                            <div className="w-[90%] h-[.12rem] bg-black dark:bg-white"></div>
                            <div className="w-1/4 h-[.12rem] bg-black dark:bg-white mt-1 lg:mt-2"></div>
                        </div>
                    </div>

                    <div className="w-1/2 ml-[50%] flex items-center p-1 lg:p-2 border border-black dark:border-white bg-light_purple dark:bg-dark_purple rounded-lg mb-2">
                        <IoMdPlay className="text-xl lg:text-2xl" />
                        <div className="w-[90%] pl-2">
                            <div className="w-[80%] h-[.15rem] bg-black dark:bg-white"></div>
                            <div className="w-[20%] h-[.15rem] bg-black dark:bg-white"></div>
                        </div>
                    </div>

                    <Image
                        src="/ImgShare.jpg"
                        alt="ImgShare"
                        width={250}
                        height={500}
                        className="w-1/2 h-[6rem] lg:h-[10rem] ml-[50%] object-cover border border-black dark:border-white rounded-lg mb-4 lg:mb-5"
                    />
                </Feature>

                <Feature header={FEATURE_HEADER.SPEAK} description={FEATURE_DESCRIPTION.SPEAK}>
                    <BsCameraVideoFill className="text-3xl lg:text-5xl p-1 lg:p-2 bg-light_purple dark:bg-dark_purple border border-black dark:border-white rounded-full absolute top-7 left-[5.4rem] lg:top-9 lg:left-[8.2rem]" />

                    <Image
                        src="/ImgVideo1.jpg"
                        alt="ImgVideo1"
                        width={250}
                        height={500}
                        className="w-[38%] h-[8rem] lg:w-[40%] lg:h-[16.4rem] object-cover border border-black dark:border-white rounded-lg mb-4 mx-auto"
                    />

                    <Image
                        src="/ImgVideo2.jpg"
                        alt="ImgVideo2"
                        width={250}
                        height={500}
                        className="w-[13%] h-[3.5rem] lg:h-[5rem] object-cover border border-black dark:border-white rounded-lg absolute top-20 right-[4.6rem] lg:top-44 lg:right-[7.8rem]"
                    />
                </Feature>

                <Feature
                    header={FEATURE_HEADER.COMMUNITY}
                    description={FEATURE_DESCRIPTION.COMMUNITY}
                >
                    <div className="w-full flex mb-4">
                        <Image
                            src="/ImgPerson1.jpg"
                            alt="ImgPerson1"
                            width={250}
                            height={500}
                            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] object-cover bg-slate-300 rounded-full border border-black dark:border-white mr-3 mt-9 lg:mt-7 lg:mr-4"
                        />
                        <div className="w-[53%] h-[4.5rem] bg-light_green dark:bg-dark_green rounded-xl border border-black dark:border-white"></div>
                    </div>

                    <div className="flex ml-[5rem] lg:ml-[9.7rem] mb-4">
                        <div className="w-[79%] h-[2.5rem] lg:h-[3rem] bg-light_purple dark:bg-dark_purple rounded-xl border border-black"></div>
                        <Image
                            src="/ImgPerson2.jpg"
                            alt="ImgPerson2"
                            width={250}
                            height={500}
                            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] object-cover bg-slate-300 rounded-full border border-black dark:border-white ml-3"
                        />
                    </div>

                    <div className="w-full flex mb-4 ">
                        <Image
                            src="/ImgPerson3.jpg"
                            alt="ImgPerson3"
                            width={250}
                            height={500}
                            className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] object-cover bg-slate-300 rounded-full border border-black dark:border-white mr-3 mt-[4.5rem]"
                        />
                        <div className="w-[53%]">
                            <div className="w-full h-[2.5rem]  lg:h-[3rem] bg-light_blue dark:bg-dark_blue rounded-xl border border-black dark:border-white mb-2"></div>
                            <div className="w-full h-[4rem] bg-light_blue dark:bg-dark_blue rounded-xl border border-black dark:border-white"></div>
                        </div>
                    </div>
                </Feature>
            </div>
        </>
    )
}

export default Features
