import { render, screen } from "@testing-library/react"
import AuthHeader from "@components/AuthHeader"
import RegisterForm from "@containers/RegisterForm"

describe("Register", () => {
    it("renders a heading", () => {
        const title = "irrelevant title"
        const { container } = render(<AuthHeader title={title} />)

        const heading = screen.getByText(title)

        expect(heading).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })
})
