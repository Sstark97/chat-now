import ChatHeader from "@containers/ChatHeader"
import MessageInput from "@components/MessageInput"
import MessageList from "@containers/MessageList"

const messages = [
    {
        id: "2",
        texto: "holi",
        date: "22/01/2020",
        senderId: "2",
        receiverId: "clgnzhz4o0000u0zwvdhffphl",
    },
    {
        id: "3",
        texto: "hol1111111",
        date: "22/01/2020",
        senderId: "2",
        receiverId: "clgnzhz4o0000u0zwvdhffphl",
    },
    {
        id: "4",
        texto: "holfdfdfdf",
        date: "22/01/2020",
        senderId: "clgnzhz4o0000u0zwvdhffphl",
        receiverId: "2",
    },
    {
        id: "5",
        texto: "holfffff",
        date: "22/01/2020",
        senderId: "clgnzhz4o0000u0zwvdhffphl",
        receiverId: "2",
    },
]

const OpenChat = () => {
    return (
        <div className="relative w-full h-screen">
            <ChatHeader />
            <MessageList messages={messages} />
            <MessageInput />
        </div>
    )
}

export default OpenChat
