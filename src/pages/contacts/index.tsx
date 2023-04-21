import { useContext } from "react"
import ChatLayout from "@layouts/ChatLayout"
import Searcher from "@components/Searcher"
import NavBar from "@components/NavBar"
import ChatDesktop from "@components/ChatDesktop"
import FriendshipList from "@containers/FriendshipList"
import Link from "next/link"
import { AiOutlinePlus } from "react-icons/ai"
import { ChatContext } from "@context/ChatProvider"
import OpenChat from "@containers/OpenChat"

const Contacts = () => {
    const { contacts: friendships, selectedChat } = useContext(ChatContext)
    const isChatOpen = Object.keys(selectedChat).length !== 0

    return (
        <ChatLayout>
            <div className="flex h-screen">
                <div className="w-full lg:w-[28%] relative hidden lg:block">
                    <NavBar />
                    <Searcher />
                    <Link
                        className="absolute top-24 right-10 lg:top-48 lg:right-12"
                        href="/contacts/add"
                    >
                        <AiOutlinePlus className="p-[.4rem] text-3xl text-dark bg-light_purple rounded-full" />
                    </Link>
                    {friendships.length === 0 ? (
                        <h1 className="text-center mt-16 ">No hay contactos agregados</h1>
                    ) : (
                        <FriendshipList friendships={friendships} />
                    )}
                </div>

                {isChatOpen ? (
                    <>
                        <OpenChat className="lg:hidden" />
                        <ChatDesktop />
                    </>
                ) : (
                    <></>
                )}
            </div>
        </ChatLayout>
    )
}

export default Contacts
