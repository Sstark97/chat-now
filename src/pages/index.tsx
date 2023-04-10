import ChatLayout from "@layouts/ChatLayout"
import ChatList from "@containers/ChatList"

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

const Home = () => (
    <ChatLayout>
        <ChatList chats={chats} />
    </ChatLayout>
)

export default Home
