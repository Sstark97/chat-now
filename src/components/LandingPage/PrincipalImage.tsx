import Image from "next/image"

const PrincipalImage = () => {
    return (
        <div className="mx-auto">
            <Image
                src="/ImgHead.jpg"
                alt="ImgHead"
                width={250}
                height={500}
                className="w-[80%] h-[20rem] rounded-lg object-cover"
            />
        </div>
    )
}

export default PrincipalImage
