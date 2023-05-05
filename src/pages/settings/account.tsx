import ChatDesktop from "@components/ChatDesktop"
import NavBar from "@components/NavBar"
import AccountContainer from "@containers/AccountContainer"
import ChatLayout from "@layouts/ChatLayout"
import { NAVBAR_TITLES } from "@lib/constants/links"

const AccountSettings = () => (
    <ChatLayout>
        <div className="flex h-screen">
            <div className="w-full lg:w-[28%] relative">
                <NavBar type={NAVBAR_TITLES.MY_ACCOUNT} />
                <AccountContainer />
            </div>
            <ChatDesktop />
        </div>
    </ChatLayout>
)
export default AccountSettings
