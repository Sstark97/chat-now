import useChatContext from "@hooks/useChatContext"
import useAddUser from "@hooks/useAddUser"
import Button from "@components/Button"
import Input from "@components/Input"
import Error from "@components/Error"
import { errors } from "@lib/constants/validations"
import { FaUserAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

/**
 * Este componente es el encargado de mostrar el formulario para añadir un contacto
 * @returns component
 * @example <AddContactForm />
 */
const AddContactForm = () => {
    const { ref } = useChatContext()
    const { addUser, error } = useAddUser(ref)

    const handleClick = async () => {
        await addUser()
    }

    const inputClass = "w-[90%]"

    return (
        <div className="w-full">
            <form className="w-full flex flex-col justify-center items-center">
                <div className="w-[90%] flex flex-col items-center">
                    {error ? <Error message={error} /> : null}
                    <div className="w-full flex flex-col justify-center items-center" ref={ref}>
                        <div className="w-full flex items-center mt-5">
                            <FaUserAlt className="w-[20%] text-2xl" />
                            <div className="w-[90%] flex flex-col justify-center items-center">
                                <Input className={inputClass} type="text" placeholder="Nombre" name="name" errorManager={errors.name} />
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-between mt-5">
                            <MdEmail className="w-[20%] text-3xl" />
                            <div className="w-[90%] flex flex-col justify-center items-center">
                                <Input className={inputClass} type="text" placeholder="Correo electrónico" name="email" errorManager={errors.email} />
                            </div>
                        </div>
                        <div className="w-[80%] flex justify-center items-center">
                            <Button value="Añadir contacto" action={handleClick} />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddContactForm
