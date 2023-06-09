import Image from "next/image"
import { HiOutlineInformationCircle } from "react-icons/hi"
import { MdWallpaper } from "react-icons/md"
import { BiExit, BiHelpCircle } from "react-icons/bi"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import ThemeModal from "@components/ThemeModal"
import StateModal from "@components/StateModal"

/**
 * Este componente se encarga de crear el contenedor de la configuración
 * @returns component
 * @example <SettingsContainer />
 */
const SettingsContainer = () => {
    const { data: session } = useSession()
    const userImage = session?.user?.image
    const userName = session?.user?.name

    return (
        <div className="w-full p-7 px-8">
            <section className="flex items-center">
                {userImage ? (
                    <Image
                        className="w-[3rem] h-[3rem] lg:w-[3.5rem] lg:h-[3.5rem] rounded-full"
                        src={userImage}
                        alt="imgUser"
                        width={75}
                        height={75}
                    />
                ) : (
                    <div className="w-[3rem] h-[3rem] lg:w-[3.5rem] lg:h-[3.5rem] bg-secondary dark:bg-dark_secondary lg:bg-icon dark:lg:bg-dark_icon rounded-full"></div>
                )}
                <p className="pl-3 text-sm lg:text-base">{userName}</p>
            </section>

            <section className="w-full pl-2 pt-8">
                <StateModal />
                <ThemeModal />

                <div className="w-full flex items-center mb-5">
                    <MdWallpaper className="pb-2 mr-3 text-2xl lg:text-3xl" />
                    <p className="w-11/12 pb-2 border-b-[.05rem] border-black text-sm lg:text-base">
                        Fondo de pantalla del chat
                    </p>
                </div>

                <Link href="/settings/account">
                    <div className="w-full flex items-center mb-5">
                        <HiOutlineInformationCircle className="pb-2 mr-3 text-2xl lg:text-3xl" />
                        <p className="w-11/12 pb-2 border-b-[.05rem] border-black text-sm lg:text-base">
                            Información de mi cuenta
                        </p>
                    </div>
                </Link>

                <Link href="/settings/help">
                    <div className="w-full flex items-center mb-5">
                        <BiHelpCircle className="pb-2 mr-3 text-2xl lg:text-3xl" />
                        <p className="w-11/12 pb-2 border-b-[.05rem] border-black text-sm lg:text-base">
                            Ayuda
                        </p>
                    </div>
                </Link>

                <div className="w-full flex items-center mb-5">
                    <BiExit className="pb-2 mr-3 text-2xl lg:text-3xl" />
                    <button
                        className="w-11/12 pb-2 border-b-[.05rem] border-black text-sm text-left lg:text-base"
                        onClick={() => {
                            signOut()
                        }}
                    >
                        Cerrar sesión
                    </button>
                </div>
            </section>
        </div>
    )
}

export default SettingsContainer
