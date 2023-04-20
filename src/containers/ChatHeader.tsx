import ContactInfo from "@components/ContactInfo"
import { HiDotsVertical } from "react-icons/hi"

const ChatHeader = () => {
    return (
        <div className="flex items-center justify-between px-10 py-4 bg-primary">
            <ContactInfo />
            <HiDotsVertical className="text-2xl" />
        </div>
    )
}

export default ChatHeader
