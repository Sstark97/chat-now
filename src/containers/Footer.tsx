import SocialIcons from "@components/SocialIcons"
import About from "@components/About"
import type { IconType } from "react-icons"

/**
 * Este componente contiene el footer de la página de inicio.
 * @returns component
 * @example <Footer />
 */
const Footer = () => {
    return (
        <div className="w-full bg-secondary dark:bg-dark_secondary p-7 lg:py-9">
            <SocialIcons
                transform={(icon) => {
                    const Icon = icon as IconType

                    return (
                        <li
                            key={Icon.name}
                            className="bg-primary dark:bg-dark_primary bg-opacity-60 rounded-full border border-black dark:border-white p-2 lg:p-3"
                        >
                            <Icon />
                        </li>
                    )
                }}
            />

            <About transform={(about) => <li key={about as string}>{about as string}</li>} />
        </div>
    )
}

export default Footer
