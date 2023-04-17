import NavBar from "@components/NavBar"
import ChatDesktop from "@components/ChatDesktop"
import AddContactForm from "./AddContactForm"

/**
 * Este componente es el encargado de mostrar el contenedor para añadir un contacto
 * @returns component
 * @example <AddContactContainer />
 */
const AddContactContainer = () => {
    return (
        <div className="flex h-screen">
            <div className="w-full lg:w-[28%] relative">
                <NavBar type="new_contact" />
                <AddContactForm />
            </div>
            <ChatDesktop />
        </div>
    )
}

export default AddContactContainer
