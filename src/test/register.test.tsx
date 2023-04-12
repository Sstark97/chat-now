import { render, screen } from "@testing-library/react"
import { ChatProvider } from "@context/ChatProvider"
import AuthHeader from "@components/AuthHeader"
import RegisterForm from "@containers/RegisterForm"
import userEvent from "@testing-library/user-event"
import { EMPTY_ERROR, errors } from "@lib/const"

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

    it("check if the button is enable when all inputs are correct", async () => {
        const user = userEvent.setup()

        render(
            <ChatProvider>
                <RegisterForm />
            </ChatProvider>
        )

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
        const user = userEvent.setup()

        render(
            <ChatProvider>
                <RegisterForm />
            </ChatProvider>
        )

        const nameInput = await screen.findByPlaceholderText("Nombre")
        user.click(nameInput)

        // Hacemos clic fuera del input
        user.click(document.body)

        // Esperamos a que se renderice el elemento <p> con el texto de EMPTY_ERROR
        expect(await screen.findByText(EMPTY_ERROR)).toBeInTheDocument()
    })

    it("check that email error appear in the document if value of input not have an email format", async () => {
        const user = userEvent.setup()

        render(
            <ChatProvider>
                <RegisterForm />
            </ChatProvider>
        )

        const emailInput = await screen.findByPlaceholderText("Correo electrónico")
        await user.type(emailInput, "notFormatEmail")

        // Hacemos clic fuera del input
        user.click(document.body)

        // Esperamos a que se renderice el elemento <p> con el texto de EMPTY_ERROR
        expect(await screen.findByText(errors.email.errorMessage)).toBeInTheDocument()
    })
})
