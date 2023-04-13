import ChatList from "@containers/ChatList"
import Searcher from "@components/Searcher"
import NavBar from "@components/NavBar"

const chats = [
    {
        name: "Juan Trabajo",
        time: "12:30",
        message: "Mañana podemos hablarlo mejor y jajajajaasdadasdasdasdad",
        numMessages: 2,
        state: "online",
    },
    {
        name: "María",
        time: "10:14",
        message: "Vale!",
        numMessages: 1,
        state: "busy",
    },
    {
        name: "Pedro 1ºDAW",
        time: "Ayer",
        message: "Genial tío, pues ya hablamos en otro momento",
        state: "offline",
    },
    {
        name: "Paula prima",
        time: "Ayer",
        message: "√√ Graciaaas",
        state: "absent",
    },
    {
        name: "Darío",
        time: "Domingo",
        message: "√ ¿A qué hora?",
        state: "offline",
    },
]

/**
 * Este componente se encarga d
 */
const ChatContainer = () => {
    return (
        <div className="w-full lg:w-[28%] relative">
            <NavBar />
            <Searcher />
            <ChatList chats={chats} />
        </div>
    )
}

export default ChatContainer
