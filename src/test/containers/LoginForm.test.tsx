import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ChatProvider } from "@context/ChatProvider"
import LoginForm from "@containers/LoginForm"
import { AUTH_BUTTONS, INPUT_LOGIN_PLACEHOLDER } from "@lib/constants/authForms"
import { EMPTY_ERROR, errors } from "@lib/constants/validations"
import type { UserEvent } from "@testing-library/user-event/setup/setup"

jest.mock("next/router", () => require("next-router-mock"))

const renderLogin = () => {
    render(
        <ChatProvider>
            <LoginForm />
        </ChatProvider>
    )
}

describe("Login", () => {
    let user: UserEvent

    beforeEach(() => {
        user = userEvent.setup()
    })

    it("should render submit button in Login Form", () => {
        renderLogin()

        const loginBtn = screen.getByText(AUTH_BUTTONS.LOGIN)

        expect(loginBtn).toBeInTheDocument()
        expect(loginBtn).toBeDisabled()
    })

    it("should enable button when all fields are correct", async () => {
        renderLogin()

        const loginBtn = screen.getByText(AUTH_BUTTONS.LOGIN)
        const inputEmail = screen.getByPlaceholderText(INPUT_LOGIN_PLACEHOLDER.EMAIL)
        const inputPassword = screen.getByPlaceholderText(INPUT_LOGIN_PLACEHOLDER.PASSWORD)

        await user.type(inputEmail, "irrelevant@email.com")
        await user.type(inputPassword, "irrelevantPassword")

        user.click(document.body)

        expect(loginBtn).not.toBeDisabled()
    })

    it("Should display errors when all fields are empty", async () => {
        renderLogin()

        const loginBtn = screen.getByText(AUTH_BUTTONS.LOGIN)
        const inputEmail = screen.getByPlaceholderText(INPUT_LOGIN_PLACEHOLDER.EMAIL)

        user.click(inputEmail)
        user.click(document.body)

        expect(await screen.findByText(EMPTY_ERROR)).toBeInTheDocument()
        expect(loginBtn).toBeDisabled()
    })

    it("Should display email error when value of input have a bad format", async () => {
        renderLogin()

        const inputEmail = screen.getByPlaceholderText(INPUT_LOGIN_PLACEHOLDER.EMAIL)

        await user.type(inputEmail, "emailWithBadFormat@")

        user.click(document.body)

        expect(await screen.findByText(errors.email.message)).toBeInTheDocument()
    })

    it("Should display an error when password length are less than 6 characters", async () => {
        renderLogin()

        const inputPassword = screen.getByPlaceholderText(INPUT_LOGIN_PLACEHOLDER.PASSWORD)

        await user.type(inputPassword, "short")

        user.click(document.body)

        expect(await screen.findByText(errors.security.message)).toBeInTheDocument()
    })
})
