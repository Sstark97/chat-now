import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="w-full bg-secondary p-7">
            <ul className="w-2/3 mx-auto flex justify-between text-xl">
                <li className="bg-primary rounded-full border border-black p-2">
                    <FaFacebookF />
                </li>
                <li className="bg-primary rounded-full border border-black p-2">
                    <FaLinkedinIn />
                </li>
                <li className="bg-primary rounded-full border border-black p-2">
                    <FaTwitter />
                </li>
                <li className="bg-primary rounded-full border border-black p-2">
                    <FaInstagram />
                </li>
            </ul>

            <ul className="w-full mx-auto flex justify-between mt-5 text-xs">
                <li>Sobre nosotros</li>
                <li>Privacidad</li>
                <li>Contáctanos</li>
            </ul>
        </div>
    )
}

export default Footer
