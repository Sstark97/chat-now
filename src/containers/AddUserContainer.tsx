import NavBar from "@components/NavBar"
import ChatDesktop from "@components/ChatDesktop"
import AddUserForm from "./AddUserForm"

/**
 * Este componente es el encargado de mostrar el contenedor para añadir un usuario
 * @returns component
 * @example <AddUserContainer />
 */
const AddUserContainer = () => {
    return (
        <div className="flex h-screen">
            <div className="w-full lg:w-[28%] relative">
                <NavBar type="new_user" />
                <AddUserForm />
            </div>
            <ChatDesktop />
        </div>
    )
}

export default AddUserContainer
