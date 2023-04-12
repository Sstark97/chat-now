import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ChatProvider } from "@context/ChatProvider"
import RegisterForm from "@containers/RegisterForm"
import { EMPTY_ERROR, errors } from "@lib/const"
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
        const registerBtn = screen.getByText("Crear cuenta")

        expect(registerBtn).toBeInTheDocument()
    })

    it("check if the button is disables when the form is empty", () => {
        renderRegister()

        const registerBtn = screen.getByText("Crear cuenta")

        expect(registerBtn).toHaveAttribute("disabled")
    })

    it("check if the button is enable when all inputs are correct", async () => {
        renderRegister()

        const registerBtn = screen.getByText("Crear cuenta")
        const nameInput = await screen.findByPlaceholderText("Nombre")
        const emailInput = await screen.findByPlaceholderText("Correo electrónico")
        const passwordInput = await screen.findByPlaceholderText("Contraseña")

        await user.type(nameInput, "irrelevant name")
        await user.type(emailInput, "irrelevant@email.com")
        await user.type(passwordInput, "irrelevant_password1234")

        user.click(nameInput)
        user.click(emailInput)
        user.click(passwordInput)

        expect(registerBtn).not.toHaveAttribute("disabled")
    })

    it("should render error message when user clicks outside of name input", async () => {
        renderRegister()

        const nameInput = await screen.findByPlaceholderText("Nombre")
        user.click(nameInput)

        // Hacemos clic fuera del input
        user.click(document.body)

        // Esperamos a que se renderice el elemento <p> con el texto de EMPTY_ERROR
        expect(await screen.findByText(EMPTY_ERROR)).toBeInTheDocument()
    })

    it("check that email error appear in the document if value of input not have an email format", async () => {
        renderRegister()

        const emailInput = await screen.findByPlaceholderText("Correo electrónico")
        await user.type(emailInput, "notFormatEmail")

        // Hacemos clic fuera del input
        user.click(document.body)

        // Esperamos a que se renderice el elemento <p> con el texto de errors.email.errorMessage
        expect(await screen.findByText(errors.email.errorMessage)).toBeInTheDocument()
    })
})
