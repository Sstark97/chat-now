import Message from "@components/Message"

const MessageList = ({ messages }: any) => {
    return (
        <div>
            {messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}
        </div>
    )
}

export default MessageList
