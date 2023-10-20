import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"

import Button from "../button"

describe("Button", () => {

  it("should render correctly", () => {
    render(<Button>label</Button>)
    const btn = screen.getByRole("button", { name: /label/i })
    expect(btn).toBeInTheDocument()
  })

  it("should call onClick when button clicked", () => {
    const mockedFn = jest.fn();
    render(<Button onClick={mockedFn}>label</Button>)
    const btn = screen.getByRole("button", { name: /label/i })
    fireEvent.click(btn);
    expect(mockedFn).toHaveBeenCalled()
  })
})

