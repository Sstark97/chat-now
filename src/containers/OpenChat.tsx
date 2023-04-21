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
        id: "3",
        text: "hol1111111",
        date: "10:15",
        senderId: "2",
        receiverId: "clgo1rty30000bz3c7atcyxbd",
    },
    {
        id: "4",
        text: "holfdfdfdf holfdfdfdf holfdfdfdf holfdfdfdf holfdfdfdf holfdfdfdf holfdfdfdf holfdfdfdfholfdfdfdf",
        date: "10:15",
        senderId: "clgo1rty30000bz3c7atcyxbd",
        receiverId: "2",
    },
    {
        id: "5",
        text: "holfffff",
        date: "10:15",
        senderId: "clgo1rty30000bz3c7atcyxbd",
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
