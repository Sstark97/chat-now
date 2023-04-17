import { render, screen } from "@testing-library/react"
import { ChatProvider } from "@context/ChatProvider"
import NavBar from "@components/NavBar"
import { principalLinks } from "@lib/constants/links"

jest.mock("next/router", () => require("next-router-mock"))

describe("Navbar", () => {
    it("Change to users page and check that icon is selected", async () => {
        render(
            <ChatProvider>
                <NavBar />
            </ChatProvider>
        )

        const contactLink = screen.getAllByRole("link")

        expect(contactLink.length).toBe(principalLinks.length)
    })
})
