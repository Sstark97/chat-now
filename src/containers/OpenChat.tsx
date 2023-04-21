import ChatHeader from "@containers/ChatHeader"
import MessageInput from "@components/MessageInput"
import MessageList from "@containers/MessageList"

const messages = [
    {
        id: "2",
        text: "holi holi holi holi holi holi holi holi holi holi holi holi holi holi holi holi holi holi holi holi",
        date: "10:15",
        senderId: "2",
        receiverId: "clgo1rty30000bz3c7atcyxbd",
    },
    {
        id: "2",
        text: "holi holi holi holi holi holi holi holi holi holi holi holi holi holi holi holi holi holi holi holi",
        date: "10:15",
        senderId: "2",
        receiverId: "clgo1rty30000bz3c7atcyxbd",
    },
    {
        id: "3",
        text: "hol1111111",
        date: "10:15",
        senderId: "2",
        receiverId: "clgo1rty30000bz3c7atcyxbd",
    },
]

const OpenChat = ({ className }: any) => {
    return (
        <div className={`w-full h-screen ${className}`}>
            <ChatHeader />
            <MessageList messages={messages} />
            <MessageInput />
        </div>
    )
}

export default OpenChat