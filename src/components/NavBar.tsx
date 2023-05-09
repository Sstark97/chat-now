import Link from "next/link"
import { useRouter } from "next/router"
import { principalLinks } from "@lib/constants/links"
import { NavBarProps } from "@customTypes/components"
import { MdArrowBackIosNew } from "react-icons/md"
import { useSession } from "next-auth/react"
import Image from "next/image"

/**
 * Este componente se encarga de crear la barra de navegación
 * @param {NavBarProps} { type } - type: tipo de barra de navegación
 * @returns component
 * @example <NavBar type="normal" />
 */
const NavBar = ({ type = "normal", route = "" }: NavBarProps) => {
    const router = useRouter()
    const { pathname } = router
    const { data: session } = useSession()
    const userImage = session?.user?.image

    return (
        <>
            {type === "normal" ? (
                <nav className="w-full bg-secondary dark:bg-dark_secondary absolute lg:relative flex justify-evenly lg:items-center lg:justify-between py-5 mt-10 lg:mt-0 rounded-t-[50px] lg:rounded-none bottom-0">
                    <div className="hidden lg:block lg:ml-10">
                        {userImage ? (
                            <Image
                                className="w-[3.5rem] h-[3.5rem] rounded-full"
                                src={userImage}
                                alt="user image"
                                width={75}
                                height={75}
                            />
                        ) : (
                            <div className="w-[3.5rem] h-[3.5rem] bg-icon dark:bg-dark_icon rounded-full"></div>
                        )}
                    </div>
                    <div className="w-[65%] lg:w-[40%] lg:mr-10 flex justify-between">
                        {principalLinks.map((link) => {
                            const { href, icon: Icon } = link
                            const isActive = pathname === href
                            const activeClass = isActive
                                ? "bg-light_purple dark:bg-dark_purple"
                                : ""

                            return (
                                <Link href={href} key={href} role="link">
                                    <Icon
                                        className={`text-5xl rounded-xl text-icon dark:text-dark_icon p-2 ${activeClass}`}
                                    />
                                </Link>
                            )
                        })}
                    </div>
                </nav>
            ) : (
                <nav className="w-full h-24 bg-secondary dark:bg-dark_secondary flex justify-evenly lg:items-center lg:justify-between py-10">
                    <Link
                        className="w-full flex justify-start items-center"
                        href={route === "" ? "/contacts" : route}
                    >
                        <MdArrowBackIosNew className="ml-6 font-extrabold text-xl" />
                        <p className="ml-6 text-lg">{type}</p>
                    </Link>
                </nav>
            )}
        </>
    )
}

export default NavBar
