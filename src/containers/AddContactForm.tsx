import useChatContext from "@hooks/useChatContext"
import useForm from "@hooks/useForm"
import Button from "@components/Button"
import Error from "@components/Error"
import { errors } from "@lib/constants/validations"
import { FaUserAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { API, REDIRECT } from "@lib/constants/links"
import InputWithIcon from "@components/InputWithIcon"

/**
 * Este componente es el encargado de mostrar el formulario para añadir un contacto
 * @returns component
 * @example <AddContactForm />
 */
const AddContactForm = () => {
    const { ref, reloadContacts } = useChatContext()
    const { action: addUser, error } = useForm(
        ref,
        API.ADD_CONTACT,
        REDIRECT.CONTACTS,
        "POST",
        reloadContacts
    )

    /**
     * Esta función es la encargada de ejecutar la función addUser
     */
    const handleClick = async () => {
        await addUser()
    }

    const inputClass = "w-[80%] mt-5 mb-1"
    const errorClass = "w-[80%] mb-1"

    return (
        <div className="w-full">
            <form className="w-full flex flex-col justify-center items-center">
                <div className="w-[90%] flex flex-col items-center">
                    {error ? <Error className="mt-5 text-center" message={error} /> : <></>}
                    <div className="w-full flex flex-col justify-center items-center" ref={ref}>
                        <InputWithIcon
                            className={inputClass}
                            type="text"
                            placeholder="Nombre"
                            name="name"
                            errorManager={errors.name}
                            errorClassName={errorClass}
                        >
                            <FaUserAlt className="w-[20%] text-2xl order-first mt-5" />
                        </InputWithIcon>
                        <InputWithIcon
                            className={inputClass}
                            type="text"
                            placeholder="Correo electrónico"
                            name="email"
                            errorManager={errors.email}
                            errorClassName={errorClass}
                        >
                            <MdEmail className="w-[20%] text-3xl order-first mt-5" />
                        </InputWithIcon>
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
