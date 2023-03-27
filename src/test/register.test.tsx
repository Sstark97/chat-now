import { render, screen } from "@testing-library/react"
import Register from "@pages/register"

describe("Register", () => {
    it("renders a heading", () => {
        const { container } = render(<Register />)

        const heading = screen.getByRole("heading", {
            name: /welcome to next\.js!/i,
        })

        expect(heading).toBeInTheDocument()

        expect(container).toMatchSnapshot()
    })
})
