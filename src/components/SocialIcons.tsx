import { RenderByMap } from "@customTypes/components"
import { SOCIAL_ICONS } from "@lib/constants/landing"

/**
 * Este componente contiene las redes sociales de la página de inicio.
 * @param transform
 * @component
 * @example <SocialIcons transform={(icon) => {
 *    const Icon = icon as IconType
 *    return (
 *      <Icon />
 *    }} />
 */
const SocialIcons = ({ transform }: RenderByMap) => (
    <ul className="w-2/3 lg:w-1/6 mx-auto flex justify-between text-xl lg:text-3xl">
        {SOCIAL_ICONS.map(transform)}
    </ul>
)

export default SocialIcons
