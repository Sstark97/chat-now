import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ChatProvider } from "@context/ChatProvider"
import RegisterForm from "@containers/RegisterForm"
import { EMPTY_ERROR, errors } from "@lib/constants/validations"
import { AUTH_BUTTONS, INPUT_REGISTER_PLACEHOLDER } from "@lib/constants/authForms"
import type { UserEvent } from "@testing-library/user-event/setup/setup"

jest.mock("next/router", () => require("next-router-mock"))

const renderRegister = () => {
    render(
        <ChatProvider>
            <RegisterForm />
        </ChatProvider>
    )
}

describe("Register", () => {
    let user: UserEvent

    beforeEach(() => {
        user = userEvent.setup()
    })

    it("render register button in Form", () => {
        renderRegister()
        const registerBtn = screen.getByText(AUTH_BUTTONS.REGISTER)

        expect(registerBtn).toBeInTheDocument()
    })

    it("check if the button is disables when the form is empty", () => {
        renderRegister()

        const registerBtn = screen.getByText(AUTH_BUTTONS.REGISTER)

        expect(registerBtn).toBeDisabled()
    })

    it("check if the button is enable when all inputs are correct", async () => {
        renderRegister()

        const registerBtn = screen.getByText(AUTH_BUTTONS.REGISTER)
        const nameInput = screen.getByPlaceholderText(INPUT_REGISTER_PLACEHOLDER.NAME)
        const emailInput = screen.getByPlaceholderText(INPUT_REGISTER_PLACEHOLDER.EMAIL)
        const passwordInput = screen.getByPlaceholderText(INPUT_REGISTER_PLACEHOLDER.PASSWORD)

        await user.type(nameInput, "irrelevant name")
        await user.type(emailInput, "irrelevant@email.com")
        await user.type(passwordInput, "irrelevant_password1234")

        user.click(nameInput)
        user.click(emailInput)
        user.click(passwordInput)

        expect(registerBtn).not.toBeDisabled()
    })

    it("should render error message when user clicks outside of name input", async () => {
        renderRegister()

        const nameInput = screen.getByPlaceholderText(INPUT_REGISTER_PLACEHOLDER.NAME)
        user.click(nameInput)

        // Hacemos clic fuera del input
        user.click(document.body)

        // Esperamos a que se renderice el elemento <p> con el texto de EMPTY_ERROR
        expect(await screen.findByText(EMPTY_ERROR)).toBeInTheDocument()
    })

    it("check that email error appear in the document if value of input not have an email format", async () => {
        renderRegister()

        const emailInput = screen.getByPlaceholderText(INPUT_REGISTER_PLACEHOLDER.EMAIL)
        await user.type(emailInput, "notFormatEmail")

        // Hacemos clic fuera del input
        user.click(document.body)

        // Esperamos a que se renderice el elemento <p> con el texto de errors.email.errorMessage
        expect(await screen.findByText(errors.email.message)).toBeInTheDocument()
    })

    it("check that password error appear in the document if value of input have a length less than 6 characters", async () => {
        renderRegister()

        const passwordInput = screen.getByPlaceholderText(INPUT_REGISTER_PLACEHOLDER.PASSWORD)
        await user.type(passwordInput, "short")

        // Hacemos clic fuera del input
        user.click(document.body)

        // Esperamos a que se renderice el elemento <p> con el texto de errors.security.errorMessage
        expect(await screen.findByText(errors.security.message)).toBeInTheDocument()
    })

    it("check if password are secure if the user click in generate password button", async () => {
        renderRegister()

        const generatePasswordBtn = screen.getByText("Generar contraseña aleatoria")
        const passwordInput = screen.getByPlaceholderText(INPUT_REGISTER_PLACEHOLDER.PASSWORD)

        await user.click(generatePasswordBtn)

        expect(passwordInput).not.toHaveDisplayValue("")
        expect(await screen.findByText(/Alta/i)).toBeInTheDocument()
    })
})
