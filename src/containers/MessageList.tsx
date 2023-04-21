import Message from "@components/Message"

const MessageList = ({ messages }: any) => {
    return (
        <div className="w-full h-full justify-end flex flex-col pb-44">
            {messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}
        </div>
    )
}

export default MessageList
