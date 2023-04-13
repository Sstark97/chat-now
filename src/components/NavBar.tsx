import Link from "next/link"
import { useRouter } from "next/router"
import { principalLinks } from "@lib/constants/links"

/**
 * Este componente se encarga de crear la barra de navegacion
 * @returns component
 * @example <NavBar />
 */
const NavBar = () => {
    const router = useRouter()
    const { pathname } = router

    return (
        <nav className="w-full bg-secondary absolute flex justify-evenly py-5 mt-10 rounded-t-[50px] bottom-0">
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
        </nav>
    )
}

export default NavBar
