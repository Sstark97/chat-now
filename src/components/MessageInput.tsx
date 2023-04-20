import { BsSend } from "react-icons/bs"

const MessageInput = () => {
    return (
        <div className="w-full absolute bottom-0">
            <input type="text" />
            <button>
                <BsSend />
            </button>
        </div>
    )
}

export default MessageInput
