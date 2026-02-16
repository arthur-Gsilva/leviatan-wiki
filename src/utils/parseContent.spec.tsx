// parseContent.test.tsx
import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import React from "react"
import { parseContent } from "./parseContent"

// Mock do next/link
vi.mock("next/link", () => ({
  default: ({ children, href }: any) => (
    <a href={href}>{children}</a>
  ),
}))

describe("parseContent", () => {
  it("transforma [[Texto]] em link com slug correto", () => {
    const result = parseContent("Veja [[Meu Teste]] aqui")

    render(<>{result}</>)

    const link = screen.getByText("Meu Teste")

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/meu_teste")
  })

  it("mantém texto normal como span", () => {
    const result = parseContent("Texto simples")

    render(<>{result}</>)

    expect(screen.getByText("Texto simples")).toBeInTheDocument()
  })

  it("converte hífen para underscore", () => {
    const result = parseContent("Link para [[Meu-Teste]]")

    render(<>{result}</>)

    const link = screen.getByText("Meu-Teste")
    expect(link).toHaveAttribute("href", "/meu_teste")
  })
})
