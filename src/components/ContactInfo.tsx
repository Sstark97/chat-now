import { useContext } from "react"
import { ChatContext } from "@context/ChatProvider"
import Image from "next/image"
import { MdArrowBackIosNew } from "react-icons/md"

const ContactInfo = () => {
    const { selectedChat, handleCloseChat } = useContext(ChatContext)
    const { image, name, status } = selectedChat

    const closeChat = () => {
        handleCloseChat()
    }

    return (
        <div className="flex items-center">
            <button onClick={closeChat}>
                <MdArrowBackIosNew className="font-extrabold text-xl lg:hidden mr-3" />
            </button>
            {image ? (
                <Image
                    className="w-[4rem] h-[4rem] rounded-full"
                    src={image}
                    alt={name}
                    width={75}
                    height={75}
                />
            ) : (
                <div className="w-[4rem] h-[4rem] lg:bg-secondary bg-icon rounded-full"></div>
            )}
            <div className="flex flex-col ml-5">
                <p className="text-lg">{name}</p>
                <p className="text-sm lg:text-sm capitalize opacity-50 mt-1">{status}</p>
            </div>
        </div>
    )
}

export default ContactInfo
