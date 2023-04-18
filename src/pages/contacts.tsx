import ChatLayout from "@layouts/ChatLayout"
import Searcher from "@components/Searcher"
import NavBar from "@components/NavBar"
import ChatDesktop from "@components/ChatDesktop"
import Chat from "@components/Friendship"

const contacts = () => (
    <ChatLayout>
        <div className="flex h-screen">
            <div className="w-full lg:w-[28%] relative">
                <NavBar />
                <Searcher />
                <Chat key="a" name="a" state="online" />
            </div>
            <ChatDesktop />
        </div>
    </ChatLayout>
)

export default contacts
