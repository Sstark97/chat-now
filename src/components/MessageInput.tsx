import { BsSendFill } from "react-icons/bs"

const MessageInput = () => {
    return (
        <div className="w-full p-4 px-10 flex items-center justify-between absolute bottom-0">
            <input placeholder="Mensaje" type="text" className="w-[88%] rounded-lg p-3" />
            <button className="w-[9%] flex justify-center p-3 text-2xl font-bold bg-light_purple rounded-lg">
                <BsSendFill />
            </button>
        </div>
    )
}

export default MessageInput
