import FriendshipList from "@containers/FriendshipList"
import Searcher from "@components/Searcher"
import NavBar from "@components/NavBar"
import ChatDesktop from "@components/ChatDesktop"

const friendships = [
    {
        name: "Juan Trabajo",
        time: "12:30",
        message: "Mañana podemos hablarlo mejor y jajajajaasdadasdasdasdad",
        numMessages: 2,
        status: "online",
    },
    {
        name: "María",
        time: "10:14",
        message: "Vale!",
        numMessages: 1,
        status: "busy",
    },
    {
        name: "Pedro 1ºDAW",
        time: "Ayer",
        message: "Genial tío, pues ya hablamos en otro momento",
        status: "offline",
    },
    {
        name: "Paula prima",
        time: "Ayer",
        message: "√√ Graciaaas",
        status: "absent",
    },
    {
        name: "Darío",
        time: "Domingo",
        message: "√ ¿A qué hora?",
        status: "offline",
    },
]

/**
 * Este componente es el encargado de mostrar el contenedor de relaciones entre usuario y contactos
 * @returns component
 * @example <FriendshipContainer />
 */
const FriendshipContainer = () => {
    return (
        <div className="flex h-screen">
            <div className="w-full lg:w-[28%] relative">
                <NavBar />
                <Searcher />
                <FriendshipList friendships={friendships} />
            </div>
            <ChatDesktop />
        </div>
    )
}

export default FriendshipContainer