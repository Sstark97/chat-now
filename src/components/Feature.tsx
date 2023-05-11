import { FeatureProps } from "@customTypes/components"

/**
 * Este componente es el encargado de mostrar las características de la aplicación
 * @param {FeatureProps} { children, header, description }
 * - children: Componente hijo
 * - header: Título de la característica
 * - description: Descripción de la característica
 * @returns component
 * @example <Feature />
 */
const Feature = ({ children, header, description }: FeatureProps) => (
    <div className="w-full lg:w-[31%] bg-secondary dark:bg-dark_secondary rounded-xl p-4 lg:p-6 relative mb-6 shadow-xl">
        {children}

        <div className="w-[90%] mx-auto text-center">
            <h1 className="text-xl lg:text-3xl font-bold mb-1 lg:mb-2">{header}</h1>
            <p className="text-xs lg:text-base">{description}</p>
        </div>
    </div>
)

export default Feature
