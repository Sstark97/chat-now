import { SOCIAL_ICONS, ABOUT } from "@lib/constants/landing"
import type { IconType } from "react-icons"

interface RenderByMap {
    transform: (element: IconType | string) => JSX.Element
}

const SocialIcons = ({ transform }: RenderByMap) => (
    <ul className="w-2/3 lg:w-1/6 mx-auto flex justify-between text-xl lg:text-3xl">
        {SOCIAL_ICONS.map(transform)}
    </ul>
)

function About({ transform }: RenderByMap) {
    return (
        <ul className="w-full lg:w-1/2 mx-auto flex justify-between mt-5 lg:mt-9 text-xs lg:text-lg">
            {ABOUT.map(transform)}
        </ul>
    )
}

/**
 * Este componente contiene el footer de la página de inicio.
 * @returns component
 * @example <Footer />
 */
const Footer = () => {
    return (
        <div className="w-full bg-secondary p-7 lg:py-9">
            <SocialIcons
                transform={(icon) => {
                    const Icon = icon as IconType

                    return (
                        <li
                            key={Icon.name}
                            className="bg-primary rounded-full border border-black p-2 lg:p-3"
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
