import Link from "next/link"
import { useRouter } from "next/router"
import { principalLinks } from "@lib/const"

/**
 * Este componente se encarga de crear la barra de navegacion
 * @returns component
 * @example <NavBar />
 */
const NavBar = () => {
    const router = useRouter()
    const { pathname } = router

    return (
        <nav className="w-full bg-secondary absolute lg:relative flex justify-evenly lg:items-center lg:justify-between py-5 mt-10 lg:mt-0 rounded-t-[50px] lg:rounded-none bottom-0">
            <div className="hidden lg:block lg:ml-10">
                <div className="w-[3.5rem] h-[3.5rem] bg-icon rounded-full"></div>
            </div>
            <div className="w-[65%] lg:w-[40%] lg:mr-10 flex justify-between">
                {principalLinks.map((link) => {
                    const { href, icon: Icon } = link
                    const isActive = pathname === href
                    const activeClass = isActive ? "bg-light_purple" : ""

                    return (
                        <Link href={href} key={href}>
                            <Icon className={`text-5xl rounded-xl p-2 ${activeClass}`} />
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}

export default NavBar
