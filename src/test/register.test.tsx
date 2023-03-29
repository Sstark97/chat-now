import { render, screen } from "@testing-library/react"
import AuthHeader from "@components/AuthHeader"
import RegisterForm from "@containers/RegisterForm"

describe("Register", () => {
    it("renders a heading", () => {
        const title = "irrelevant title"
        const { container } = render(<AuthHeader title={title} />)

        const heading = screen.getByText(title)

        expect(container).toHaveTextContent(title)
        expect(heading).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })

    it("call an event when register clicked", () => {
        const register = jest.fn()
        const component = render(<RegisterForm onRegister={register} />)
        const registerBtn = component.getByText("Crear cuenta")

        registerBtn.click()

        expect(register).toHaveBeenCalled()
    })
})
