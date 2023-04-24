import Image from "next/image"

const FirstBlock = () => {
    return (
        <div className="mx-auto w-[80%] relative mb-8">
            <Image
                src="/ImgMobile1.png"
                alt="ImgMobile1"
                width={250}
                height={500}
                className="w-[90%] object-cover mx-auto"
            />

            <p className="my-6 text-center text-lg">
                Habla con tus amigos y familiares de la manera más cómoda y segura posible
            </p>

            <Image
                src="/ImgMobile2.png"
                alt="ImgMobile2"
                width={250}
                height={500}
                className="w-[90%] object-cover mx-auto"
            />
        </div>
    )
}

export default FirstBlock
