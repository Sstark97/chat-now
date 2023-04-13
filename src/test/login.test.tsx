import { render, screen } from "@testing-library/react"
import { ChatProvider } from "@context/ChatProvider"
import LoginForm from "@containers/LoginForm"
import { AUTH_BUTTONS, INPUT_LOGIN_PLACEHOLDER } from "@lib/constants/authForms"
import userEvent from "@testing-library/user-event"
import { UserEvent } from "@testing-library/user-event/setup/setup"
import { EMPTY_ERROR } from "@lib/constants/validations"

jest.mock("next/router", () => require("next-router-mock"))

describe("Login", () => {
    let user: UserEvent

    beforeEach(() => {
        user = userEvent.setup()
    })

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

        user.click(document.body)

        expect(loginBtn).not.toHaveAttribute("disabled")
    })

    it("Should display errors when all fields are empty", async () => {
        render(
            <ChatProvider>
                <LoginForm />
            </ChatProvider>
        )

        const loginBtn = screen.getByText(AUTH_BUTTONS.LOGIN)
        const inputEmail = screen.getByPlaceholderText(INPUT_LOGIN_PLACEHOLDER.EMAIL)

        user.click(inputEmail)
        user.click(document.body)

        expect(await screen.findByText(EMPTY_ERROR)).toBeInTheDocument()
        expect(loginBtn).toHaveAttribute("disabled")
    })
})
