import NavBar from "@components/NavBar"
import ChatDesktop from "@components/ChatDesktop"
import ModifyContactForm from "@containers/ModifyContactForm"

const ModifyContactContainer = () => (
    <div className="flex h-screen">
        <div className="w-full lg:w-[28%] relative">
            <NavBar type="Editar" />
            <ModifyContactForm />
        </div>
        <ChatDesktop />
    </div>
)

export default ModifyContactContainer
