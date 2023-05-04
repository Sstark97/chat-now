import ChatDesktop from "@components/ChatDesktop"
import NavBar from "@components/NavBar"
import SettingsContainer from "@containers/SettingsContainer"
import ChatLayout from "@layouts/ChatLayout"
import { NAVBAR_TITLES } from "@lib/constants/links"

const settings = () => (
    <ChatLayout>
        <div className="flex h-screen">
            <div className="w-full lg:w-[28%] relative">
                <NavBar type={NAVBAR_TITLES.SETTINGS} />
                <SettingsContainer />
            </div>
            <ChatDesktop />
        </div>
    </ChatLayout>
)
export default settings
