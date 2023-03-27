import { render, screen } from "@testing-library/react"
import Register from "@pages/register"

describe("Register", () => {
    it("renders a heading", () => {
        const { container } = render(<Register />)

        const heading = screen.getByText("Crea tu cuenta")

        expect(heading).toBeInTheDocument()

        expect(container).toMatchSnapshot()
    })
})
