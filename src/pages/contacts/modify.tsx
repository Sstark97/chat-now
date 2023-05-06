import ContactNavBar from "@components/ContactNavBar"
import ChatDesktop from "@components/ChatDesktop"
import ModifyContactForm from "@containers/ModifyContactForm"

const ModifyContactContainer = () => (
    <div className="flex h-screen">
        <div className="w-full lg:w-[28%] relative">
            <ContactNavBar />
            <ModifyContactForm />
        </div>
        <ChatDesktop />
    </div>
)

export default ModifyContactContainer
