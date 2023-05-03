import Image from "next/image"
import Features from "@containers/Features"
import ExampleChats from "@components/ExampleChats"
import Footer from "@containers/Footer"
import Hero from "@components/Hero"
import AuthGuardian from "@containers/AuthGuardian"

const Landing = () => {
    return (
        <AuthGuardian>
            <>
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={250}
                    height={500}
                    className="w-[3rem] lg:w-[4rem] ml-5 mt-3 rounded-xl object-cover"
                />

                <Hero />
                <ExampleChats />
                <Features />
                <Footer />
            </>
        </AuthGuardian>
    )
}

export default Landing
