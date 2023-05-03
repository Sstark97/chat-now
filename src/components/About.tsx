import { RenderByMap } from "@customTypes/components"
import { ABOUT } from "@lib/constants/landing"

/**
 * Este componente contiene los textos de la sección de "Acerca de" de la página de inicio.
 * @param transform
 * @component
 * @example <About transform={(about) => <li key={about as string}>{about as string}</li>} />
 */
const About = ({ transform }: RenderByMap) => (
    <ul className="w-full lg:w-1/2 mx-auto flex justify-between mt-5 lg:mt-9 text-xs lg:text-lg">
        {ABOUT.map(transform)}
    </ul>
)

export default About
