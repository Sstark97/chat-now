import { ChatProvider } from "@context/ChatProvider"
import NavBar from "@components/NavBar"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

jest.mock("next/router", () => require("next-router-mock"))

describe("Navbar", () => {
    it("Change to users page and check that icon is selected", () => {
        const user = userEvent.setup()
        render(
            <ChatProvider>
                <NavBar />
            </ChatProvider>
        )

        const contactLink = screen.getByRole("link", { name: "contacts" })

        user.click(contactLink)

        expect(contactLink).toHaveClass("bg-light_purple")
    })
})
