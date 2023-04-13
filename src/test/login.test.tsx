import { render, screen } from "@testing-library/react"
import { ChatProvider } from "@context/ChatProvider"
import LoginForm from "@containers/LoginForm"
import { AUTH_BUTTONS, INPUT_LOGIN_PLACEHOLDER } from "@lib/constants/authForms"
import userEvent from "@testing-library/user-event"

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

    it("should enable button when all fields are correct", async () => {
        const user = userEvent.setup()

        render(
            <ChatProvider>
                <LoginForm />
            </ChatProvider>
        )

        const loginBtn = screen.getByText(AUTH_BUTTONS.LOGIN)
        const inputEmail = screen.getByPlaceholderText(INPUT_LOGIN_PLACEHOLDER.EMAIL)
        const inputPassword = screen.getByPlaceholderText(INPUT_LOGIN_PLACEHOLDER.PASSWORD)

        await user.type(inputEmail, "irrelevant@email.com")
        await user.type(inputPassword, "irrelevantPassword")

        await user.click(document.body)

        expect(loginBtn).not.toHaveAttribute("disabled")
    })
})
