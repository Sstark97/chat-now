import Image from "next/image"
import { useSession, signOut } from "next-auth/react"
import { BsFillCameraFill } from "react-icons/bs"
import EditUser from "./EditUser"
import DeleteModal from "@components/DeleteModal"
import { useState } from "react"
import { deleteFrom } from "@lib/utils/fetcher"
import { API, REDIRECT } from "@lib/constants/links"
import { useRouter } from "next/router"

const AccountContainer = () => {
    const { data: session } = useSession()
    const userImage = session?.user?.image
    const [error, setError] = useState("")
    const router = useRouter()

    const handleDelete = async (email: string) => {
        try {
            await deleteFrom({ email }, API.DELETE_USER)
            setError("")
            signOut()
            await router.push(REDIRECT.HOME)
        } catch (error) {
            const { message } = error as Error
            setError(message)
        }
    }

    return (
        <div className="w-full p-7 px-8">
            <section className="w-full flex justify-center items-center">
                {userImage ? (
                    <Image
                        className="w-[6rem] h-[6rem] lg:w-[6.5rem] lg:h-[6.5rem] rounded-full"
                        src={userImage}
                        alt="imgUser"
                        width={75}
                        height={75}
                    />
                ) : (
                    <div className="w-[6rem] h-[6rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-secondary rounded-full flex justify-center items-center">
                        <BsFillCameraFill className="text-4xl text-icon" />
                    </div>
                )}
            </section>
            <EditUser />
            <DeleteModal
                title="cuenta"
                error={error}
                handleDelete={handleDelete}
                cleanError={() => {
                    setError("")
                }}
            />
        </div>
    )
}

export default AccountContainer
