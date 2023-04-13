import { render, screen } from "@testing-library/react"
import { ChatProvider } from "@context/ChatProvider"
import LoginForm from "@containers/LoginForm"
import { AUTH_BUTTONS } from "@lib/constants/authForms"

jest.mock("next/router", () => require("next-router-mock"))

describe("Login", () => {
    it("should render submit button in Login Form", () => {
        render(
            <ChatProvider>
                <LoginForm />
            </ChatProvider>
        )

        const loginBtn = screen.getByText(AUTH_BUTTONS.LOGIN)

        expect(loginBtn).toBeInTheDocument()
        expect(loginBtn).toHaveAttribute("disabled")
    })
})
