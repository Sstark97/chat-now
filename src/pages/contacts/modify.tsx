import useChatContext from "@hooks/useChatContext"
import NavBar from "@components/NavBar"
import ChatDesktop from "@components/ChatDesktop"
import { API, REDIRECT } from "@lib/constants/links"
import InputWithIcon from "@components/InputWithIcon"
import Button from "@components/Button"
import Error from "@components/Error"
import { FaUserAlt } from "react-icons/fa"
import { errors } from "@lib/constants/validations"
import { changeFrom } from "@lib/utils/fetcher"
import { getUserDataFrom } from "@lib/utils/user"
import { useState } from "react"
import { useRouter } from "next/router"

const ModifyContactContainer = () => {
    const [error, setError] = useState("")
    const router = useRouter()
    const { ref, selectedChat, reloadContacts, handleChangeSelectedChatName } = useChatContext()

    const handleEdit = async () => {
        const contactBody = getUserDataFrom(ref.current)
        try {
            await changeFrom(
                { ...contactBody, id: selectedChat.id as string },
                API.MODIFY_CONTACT,
                "PUT"
            )
            await reloadContacts()
            handleChangeSelectedChatName(contactBody.name)
            await router.push(REDIRECT.CONTACTS)
        } catch (error) {
            const { message } = error as Error
            setError(message)
        }
    }

    const inputClass = "w-[80%] mt-5 mb-1"
    const errorClass = "w-[80%] mb-1"

    return (
        <div className="flex h-screen">
            <div className="w-full lg:w-[28%] relative">
                <NavBar type="Editar" />
                <div className="w-full">
                    <form className="w-full flex flex-col justify-center items-center">
                        <div className="w-[90%] flex flex-col items-center">
                            {error ? <Error className="mt-5 text-center" message={error} /> : <></>}
                            <div
                                className="w-full flex flex-col justify-center items-center"
                                ref={ref}
                            >
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
                                    {/* <Button value="Eliminar contacto" action={handleClick} /> */}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ChatDesktop />
        </div>
    )
}

export default ModifyContactContainer
