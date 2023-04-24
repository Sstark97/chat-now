import Boxs from "@components/LandingPage/Boxs"
import FirstBlock from "@components/LandingPage/FirstBlock"
import Footer from "@components/LandingPage/Footer"
import PrincipalImage from "@components/LandingPage/PrincipalImage"
import ChatLayout from "@layouts/ChatLayout"
import Image from "next/image"

const Landing = () => (
    <ChatLayout>
        <Image
            src="/logo.png"
            alt="logo"
            width={250}
            height={500}
            className="w-[3rem] ml-5 mt-3 rounded-xl object-cover"
        />

        <PrincipalImage />
        <FirstBlock />
        <Boxs />
        <Footer />
    </ChatLayout>
)

export default Landing
