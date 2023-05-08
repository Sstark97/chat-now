import Image from "next/image"

/**
 * Este componente se encarga de mostrar la primera sección de la landing page
 * @returns component
 * @example <FirstBlock />
 */
const ExampleChats = () => {
    const theme = localStorage.getItem("theme") ?? "light"

    return (
        <div className="mx-auto w-[80%] relative mb-8">
            <Image
                src={theme === "light" ? "/ImgMobile1.png" : "/ImgMobileDark1.png"}
                alt="ImgMobile1"
                width={250}
                height={500}
                className="w-[90%] lg:hidden object-cover mx-auto"
            />
            <Image
                src={theme === "light" ? "/ImgDesktop1.png" : "/ImgDesktopDark1.png"}
                alt="ImgDesktop1"
                width={1000}
                height={500}
                className="w-[90%] hidden lg:block object-cover mx-auto"
            />

            <p className="w-[85%] lg:w-[35%] lg:leading-10 mx-auto my-6 lg:my-8 text-center text-lg lg:text-4xl">
                Habla con tus amigos y familiares de la manera más cómoda y segura posible
            </p>

            <Image
                src={theme === "light" ? "/ImgMobile2.png" : "/ImgMobileDark2.png"}
                alt="ImgMobile2"
                width={250}
                height={500}
                className="w-[90%] lg:hidden object-cover mx-auto"
            />
            <Image
                src={theme === "light" ? "/ImgDesktop2.png" : "/ImgDesktopDark2.png"}
                alt="ImgDesktop2"
                width={1000}
                height={500}
                className="w-[90%] hidden lg:block object-cover mx-auto"
            />
        </div>
    )
}

export default ExampleChats
