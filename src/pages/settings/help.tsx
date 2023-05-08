import ChatDesktop from "@components/ChatDesktop"
import NavBar from "@components/NavBar"
import HelpContainer from "@containers/HelpContainer"
import ChatLayout from "@layouts/ChatLayout"
import { NAVBAR_TITLES } from "@lib/constants/links"

const HelpSettings = () => (
    <ChatLayout>
        <div className="flex h-screen">
            <div className="w-full lg:w-[28%] relative">
                <NavBar type={NAVBAR_TITLES.HELP} route="/settings" />
                <HelpContainer />
            </div>
            <ChatDesktop />
        </div>
    </ChatLayout>
)
export default HelpSettings
