import ChatHeader from "@containers/ChatHeader"
import MessageInput from "@components/MessageInput"
import MessageList from "@components/MessageList"

const messages = [
    {
        id: "2",
        texto: "holi",
        date: "22/01/2020",
        senderId: "2",
        reciberId: "1",
    },
    {
        id: "3",
        texto: "hol1111111",
        date: "22/01/2020",
        senderId: "2",
        reciberId: "1",
    },
    {
        id: "4",
        texto: "holfdfdfdf",
        date: "22/01/2020",
        senderId: "1",
        reciberId: "2",
    },
    {
        id: "5",
        texto: "holfffff",
        date: "22/01/2020",
        senderId: "1",
        reciberId: "2",
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
