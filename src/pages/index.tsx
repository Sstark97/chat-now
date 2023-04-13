import ChatLayout from "@layouts/ChatLayout"
import ChatDesktop from "@components/ChatDesktop"
import ChatContainer from "@containers/ChatContainer"

const Home = () => (
    <ChatLayout>
        <div className="flex h-screen">
            <ChatContainer />
            <ChatDesktop />
        </div>
    </ChatLayout>
)

export default Home
