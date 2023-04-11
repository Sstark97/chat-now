import { render, screen } from "@testing-library/react"
import { ChatProvider } from "@context/ChatProvider"
import AuthHeader from "@components/AuthHeader"
import RegisterForm from "@containers/RegisterForm"

jest.mock("next/router", () => require("next-router-mock"))

describe("Register", () => {
    it("renders a heading", () => {
        const title = "irrelevant title"
        const { container } = render(<AuthHeader title={title} />)

        const heading = screen.getByText(title)

        expect(container).toHaveTextContent(title)
        expect(heading).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })

    it("render register button in Form", () => {
        render(
            <ChatProvider>
                <RegisterForm />
            </ChatProvider>
        )
        const registerBtn = screen.getByText("Crear cuenta")

        expect(registerBtn).toBeInTheDocument()
    })

    it("check if the button is disables when the form is empty", () => {
        render(
            <ChatProvider>
                <RegisterForm />
            </ChatProvider>
        )

        const registerBtn = screen.getByText("Crear cuenta")

        expect(registerBtn).toHaveAttribute("disabled")
    })
})
