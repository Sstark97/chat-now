import NavBar from "@components/NavBar"
import ChatDesktop from "@components/ChatDesktop"
import AddContactForm from "../../containers/AddContactForm"
import { NAVBAR_TITLES } from "@lib/constants/links"

const AddContactContainer = () => {
    return (
        <div className="flex h-screen">
            <div className="w-full lg:w-[28%] relative">
                <NavBar type={NAVBAR_TITLES.NEW_CONTACT} />
                <AddContactForm />
            </div>
            <ChatDesktop />
        </div>
    )
}

export default AddContactContainer
