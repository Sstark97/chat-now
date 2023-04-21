import Message from "@components/Message"
import { MessageListProps } from "@customTypes/containers"

const MessageList = ({ messages }: MessageListProps) => {
    return (
        <div className="w-full h-full flex flex-col pb-[4.5rem] pt-[6.5rem] lg:pb-30 overflow-y-scroll scrollbar-hide">
            {messages.map((message) => (
                <Message key={message.id} {...message} />
            ))}
        </div>
    )
}

export default MessageList
