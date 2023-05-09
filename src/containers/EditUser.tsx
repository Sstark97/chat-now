import { errors } from "@lib/constants/validations"
import { FaUserAlt, FaKey } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import InputWithIcon from "@components/InputWithIcon"
import { useSession } from "next-auth/react"
import useChatContext from "@hooks/useChatContext"
import PasswordInput from "@components/PasswordInput"
import { INPUT_REGISTER_PLACEHOLDER } from "@lib/constants/authForms"
import { API } from "@lib/constants/links"
import { getUserDataFrom } from "@lib/utils/user"
import { changeFrom } from "@lib/utils/fetcher"
import { useRouter } from "next/router"
import { FormEvent } from "react"
/**
 * Este componente es el encargado de mostrar el formulario para añadir un contacto
 * @returns component
 * @example <AddContactForm />
 */
const EditUser = () => {
    const { ref } = useChatContext()
    const { data: session, update } = useSession()
    const userName = session?.user?.name as string
    const userEmail = session?.user.email
    const router = useRouter()

    const inputClass = "w-[80%] mt-5 mb-1"
    const errorClass = "w-[80%] mb-1"

    const handleClickInEdit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const user = getUserDataFrom(ref.current)
        const userFromApi = await changeFrom(user, API.EDIT_USER, "PUT")

        await update({
            ...session,
            user: {
                ...session?.user,
                name: userFromApi.name,
            },
        })

        const event = new Event("visibilitychange")
        document.dispatchEvent(event)
        router.back()
    }

    return (
        <section className="w-full">
            <form
                className="w-full flex flex-col justify-center items-center"
                method="POST"
                onSubmit={handleClickInEdit}
            >
                {/*{error ? <Error message={error} /> : <></>}*/}
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
                            notRequired
                        >
                            <FaKey className="w-[20%] text-3xl order-first mt-5" />
                        </PasswordInput>
                        <div className="w-[80%] flex flex-col justify-center items-center">
                            <button className="w-full bg-light_purple dark:bg-dark_purple py-2 mt-5 md:mt-6 text-[1.15rem] rounded-xl shadow-lg brightness-100 disabled:brightness-75 active:translate-y-[2%] active:shadow-md disabled:active:translate-y-[0%] disabled:active:shadow-lg">
                                Editar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default EditUser
