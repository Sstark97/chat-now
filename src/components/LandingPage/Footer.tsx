import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="w-full bg-secondary p-7 lg:py-9">
            <ul className="w-2/3 lg:w-1/6 mx-auto flex justify-between text-xl lg:text-3xl">
                <li className="bg-primary rounded-full border border-black p-2 lg:p-3">
                    <FaFacebookF />
                </li>
                <li className="bg-primary rounded-full border border-black p-2 lg:p-3">
                    <FaLinkedinIn />
                </li>
                <li className="bg-primary rounded-full border border-black p-2 lg:p-3">
                    <FaTwitter />
                </li>
                <li className="bg-primary rounded-full border border-black p-2 lg:p-3">
                    <FaInstagram />
                </li>
            </ul>

            <ul className="w-full lg:w-1/2 mx-auto flex justify-between mt-5 lg:mt-9 text-xs lg:text-lg">
                <li>Sobre nosotros</li>
                <li>Privacidad</li>
                <li>Contáctanos</li>
            </ul>
        </div>
    )
}

export default Footer
