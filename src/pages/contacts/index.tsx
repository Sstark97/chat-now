import ChatLayout from "@layouts/ChatLayout"
import Searcher from "@components/Searcher"
import NavBar from "@components/NavBar"
import ChatDesktop from "@components/ChatDesktop"
import FriendshipList from "@containers/FriendshipList"
import Link from "next/link"
import { AiOutlinePlus } from "react-icons/ai"

const friendships = [
    {
        name: "Juan Trabajo",
        state: "online",
    },
    {
        name: "María",
        state: "busy",
    },
    {
        name: "Pedro 1ºDAW",
        state: "offline",
    },
    {
        name: "Paula prima",
        state: "absent",
    },
    {
        name: "Darío",
        state: "offline",
    },
]

const contacts = () => (
    <ChatLayout>
        <div className="flex h-screen">
            <div className="w-full lg:w-[28%] relative">
                <NavBar />
                <Searcher />
                <Link className="absolute top-24 right-10" href="/contacts/add">
                    <AiOutlinePlus className="p-[.4rem] text-3xl text-dark bg-light_purple rounded-full" />
                </Link>
                <FriendshipList friendships={friendships} />
            </div>
            <ChatDesktop />
        </div>
    </ChatLayout>
)

export default contacts
