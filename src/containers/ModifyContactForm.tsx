import useChatContext from "@hooks/useChatContext"
import useEditContact from "@hooks/useEditContact"
import Error from "@components/Error"
import InputWithIcon from "@components/InputWithIcon"
import { errors } from "@lib/constants/validations"
import { FaUserAlt } from "react-icons/fa"
import Button from "@components/Button"
import DeleteModal from "@components/DeleteModal"
import useDeleteContact from "@hooks/useDeleteContact"

/**
 * Formulario para modificar un contacto
 * @component ModifyContactForm
 * @example
 * <ModifyContactForm />
 */
const ModifyContactForm = () => {
    const { ref, selectedChat } = useChatContext()
    const { handleEdit, error } = useEditContact()
    const { handleDelete, error: deleteError, cleanError } = useDeleteContact()

    const inputClass = "w-[80%] mt-5 mb-1"
    const errorClass = "w-[80%] mb-1"

    return (
        <form className="w-full flex flex-col justify-center items-center">
            <div className="w-[90%] flex flex-col items-center">
                {error ? <Error className="mt-5 text-center" message={error} /> : <></>}
                <div className="w-full flex flex-col justify-center items-center" ref={ref}>
                    <InputWithIcon
                        className={inputClass}
                        type="text"
                        value={selectedChat.name}
                        name="name"
                        errorManager={errors.name}
                        errorClassName={errorClass}
                    >
                        <FaUserAlt className="w-[20%] text-2xl order-first mt-5" />
                    </InputWithIcon>
                    <div className="w-[80%] flex flex-col justify-center items-center">
                        <Button value="Editar contacto" action={handleEdit} />
                        <DeleteModal
                            name={selectedChat.name}
                            title="Contacto"
                            error={deleteError}
                            handleDelete={handleDelete}
                            cleanError={cleanError}
                        />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ModifyContactForm
