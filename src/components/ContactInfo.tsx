import { useContext } from "react"
import { ChatContext } from "@context/ChatProvider"
import Image from "next/image"

const ContactInfo = () => {
    const { selectedChat } = useContext(ChatContext)
    const { image, name, status } = selectedChat

    return (
        <div className="flex items-center">
            {image ? (
                <Image src={image} alt={name} width={75} height={75} />
            ) : (
                <div className="w-[4rem] h-[4rem] bg-secondary rounded-full"></div>
            )}
            <div className="flex flex-col ml-5">
                <p className="text-lg">{name}</p>
                <p className="text-sm capitalize opacity-50 mt-1">{status}</p>
            </div>
        </div>
    )
}

export default ContactInfo
