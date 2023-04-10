import { render, screen } from "@testing-library/react"
import AuthHeader from "@components/AuthHeader"
import RegisterForm from "@containers/RegisterForm"

describe.skip("Register", () => {
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
        render(<RegisterForm />)
        const registerBtn = screen.getByText("Crear cuenta")

        registerBtn.click()

        expect(register).toHaveBeenCalled()
    })
})
