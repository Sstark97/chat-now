import Image from "next/image"
import useDeleteUser from "@hooks/useDeleteUser"
import { useSession } from "next-auth/react"
import { BsFillCameraFill } from "react-icons/bs"
import EditUser from "./EditUser"
import DeleteModal from "@components/DeleteModal"

/**
 * Este componente se encarga de crear el contenedor de la cuenta
 * @returns component
 * @example <AccountContainer />
 */
const AccountContainer = () => {
    const { data: session } = useSession()
    const { handleDelete, error, cleanError } = useDeleteUser()
    const userImage = session?.user?.image

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
                    <div className="w-[6rem] h-[6rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-secondary dark:bg-dark_secondary rounded-full flex justify-center items-center">
                        <BsFillCameraFill className="text-4xl text-icon dark:text-dark_icon" />
                    </div>
                )}
            </section>
            <EditUser />
            <DeleteModal
                title="cuenta"
                error={error}
                handleDelete={handleDelete}
                cleanError={cleanError}
            />
        </div>
    )
}

export default AccountContainer
