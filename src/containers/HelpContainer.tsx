import { BiHelpCircle, BiUser } from "react-icons/bi"
import { HiOutlineInformationCircle } from "react-icons/hi"

const HelpContainer = () => {
    return (
        <div className="w-full p-7 px-8">
            <section className="w-full pl-2 pt-8">
                <div className="w-full flex items-center mb-5">
                    <BiHelpCircle className="pb-2 mr-3 text-2xl lg:text-3xl" />
                    <p className="w-11/12 pb-2 border-b-[.05rem] border-black text-sm lg:text-base">
                        Centro de ayuda
                    </p>
                </div>

                <div className="w-full flex items-center mb-5">
                    <BiUser className="pb-2 mr-3 text-2xl lg:text-3xl" />
                    <p className="w-11/12 pb-2 border-b-[.05rem] border-black text-sm lg:text-base">
                        Contáctanos
                    </p>
                </div>

                <div className="w-full flex items-center mb-5">
                    <HiOutlineInformationCircle className="pb-2 mr-3 text-2xl lg:text-3xl" />
                    <p className="w-11/12 pb-2 border-b-[.05rem] border-black text-sm lg:text-base">
                        Condiciones y Política de privacidad
                    </p>
                </div>
            </section>
        </div>
    )
}

export default HelpContainer
