import Button from "@components/Button"
import Error from "@components/Error"
import { errors } from "@lib/constants/validations"
import { FaUserAlt, FaKey } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import InputWithIcon from "@components/InputWithIcon"
import { useSession } from "next-auth/react"
import useChatContext from "@hooks/useChatContext"
import PasswordInput from "@components/PasswordInput"
import { INPUT_REGISTER_PLACEHOLDER } from "@lib/constants/authForms"
import useForm from "@hooks/useForm"
import { API, REDIRECT } from "@lib/constants/links"
import { getUserDataFrom } from "@lib/utils/user"
import { changeFrom } from "@lib/utils/fetcher"
import { useRouter } from "next/router"
/**
 * Este componente es el encargado de mostrar el formulario para añadir un contacto
 * @returns component
 * @example <AddContactForm />
 */
const EditUser = () => {
    const { ref } = useChatContext()
    const { data: session, update } = useSession()
    const { action: editUser, error } = useForm(ref, API.EDIT_USER, REDIRECT.HOME, "PUT")
    const userName = session?.user?.name as string
    const userEmail = session?.user.email
    const router = useRouter()

    const inputClass = "w-[80%] mt-5 mb-1"
    const errorClass = "w-[80%] mb-1"

    const handleClickInEdit = async () => {
        const user = getUserDataFrom(ref.current)
        const userFromApi = await changeFrom(user, API.EDIT_USER, "PUT")

        await update({
            ...session,
            user: {
                ...session?.user,
                name: userFromApi.name,
            },
        })

        await router.push(REDIRECT.HOME)
    }

    return (
        <section className="w-full">
            <form className="w-full flex flex-col justify-center items-center">
                {error ? <Error message={error} /> : <></>}
                <div className="w-[90%] flex flex-col items-center">
                    <div className="w-full flex flex-col justify-center items-center" ref={ref}>
                        <InputWithIcon
                            className={inputClass}
                            type="text"
                            placeholder="Nombre"
                            name="name"
                            errorManager={errors.name}
                            errorClassName={errorClass}
                            value={userName}
                        >
                            <FaUserAlt className="w-[20%] text-2xl order-first mt-5" />
                        </InputWithIcon>
                        <InputWithIcon
                            className={inputClass}
                            type="text"
                            name="email"
                            value={userEmail}
                            disabled
                        >
                            <MdEmail className="w-[20%] text-3xl order-first mt-5" />
                        </InputWithIcon>
                        <PasswordInput
                            className={inputClass}
                            placeholder={INPUT_REGISTER_PLACEHOLDER.PASSWORD}
                            location="register"
                            validate
                        >
                            <FaKey className="w-[20%] text-3xl order-first mt-5" />
                        </PasswordInput>
                        <div className="w-[80%] flex justify-center items-center">
                            {/*<Button value="Editar" action={handleClickInEdit} />*/}
                            <button onClick={handleClickInEdit}>Editar</button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default EditUser
