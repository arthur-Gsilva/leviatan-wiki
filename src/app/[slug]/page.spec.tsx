// page.spec.tsx
import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen } from "@testing-library/react"
import React from "react"
import Page, { generateMetadata, generateStaticParams } from "./page"
import { getEntryBySlug, getAllSlugs } from "@/services/wiki"
import { staticPages } from "@/data/staticPages"

// Mock dos módulos externos
vi.mock("@/services/wiki", () => ({
  getEntryBySlug: vi.fn(),
  getAllSlugs: vi.fn(),
  getAllEntries: vi.fn(),
}))

vi.mock("@/data/staticPages", () => ({
  staticPages: {}
}))

vi.mock("next/image", () => ({
  default: ({ src, alt, width, height, className, style }: any) => (
    <img 
      src={src} 
      alt={alt} 
      width={width} 
      height={height} 
      className={className}
      style={style}
    />
  ),
}))

vi.mock("@/components/ContentBox", () => ({
  ContentBox: ({ children }: any) => <div data-testid="content-box">{children}</div>,
}))

vi.mock("@/components/TitleBox", () => ({
  TitleBox: ({ title, subtitle }: any) => (
    <div data-testid="title-box">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  ),
}))

vi.mock("@/components/StaticPage", () => ({
  StaticPage: ({ data }: any) => <div data-testid="static-page">{data.title}</div>,
}))

vi.mock("@/utils/parseContent", () => ({
  parseContent: (text: string) => <span>{text}</span>,
}))

describe("Page Component", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe("Quando a entrada não é encontrada", () => {
    it("deve renderizar mensagem de erro", async () => {
      vi.mocked(getEntryBySlug).mockResolvedValue(null)

      const params = Promise.resolve({ slug: "nao-existe" })
      const component = await Page({ params })
      
      render(component)

      expect(screen.getByText("Achei não")).toBeInTheDocument()
    })
  })

  describe("Quando é uma página estática", () => {
    it("deve renderizar StaticPage component", async () => {
      const mockStaticData = { title: "Página Estática" }
      vi.mocked(staticPages as any).minhapagina = mockStaticData

      const params = Promise.resolve({ slug: "minhapagina" })
      const component = await Page({ params })
      
      render(component)

      expect(screen.getByTestId("static-page")).toBeInTheDocument()
      expect(screen.getByText("Página Estática")).toBeInTheDocument()
    })
  })

  describe("Quando é um personagem válido", () => {
    const mockCharacter = {
      name: "Jon Snow",
      slug: "jon-snow",
      organization: "Night's Watch",
      image: "/images/jon-snow.jpg",
      description: [
        { title: "Idade", content: "25" },
        { title: "Origem", content: "Winterfell" },
      ],
      sections: [
        {
          title: "História",
          content: "Jon Snow é um personagem importante...",
        },
        {
          title: "Habilidades",
          content: "Excelente espadachim",
        },
      ],
    }

    beforeEach(() => {
      vi.mocked(getEntryBySlug).mockResolvedValue(mockCharacter as any)
    })

    it("deve renderizar o nome do personagem", async () => {
      const params = Promise.resolve({ slug: "jon-snow" })
      const component = await Page({ params })
      
      render(component)

      expect(screen.getByText("Jon Snow")).toBeInTheDocument()
    })

    it("deve renderizar a organização do personagem", async () => {
      const params = Promise.resolve({ slug: "jon-snow" })
      const component = await Page({ params })
      
      render(component)

      expect(screen.getByText("Night's Watch")).toBeInTheDocument()
    })

    it("deve renderizar a imagem do personagem", async () => {
      const params = Promise.resolve({ slug: "jon-snow" })
      const component = await Page({ params })
      
      render(component)

      const image = screen.getByAltText("Jon Snow")
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute("src", "/images/jon-snow.jpg")
      expect(image).toHaveAttribute("width", "300")
      expect(image).toHaveAttribute("height", "300")
    })

    it("deve renderizar todas as informações básicas", async () => {
      const params = Promise.resolve({ slug: "jon-snow" })
      const component = await Page({ params })
      
      render(component)

      expect(screen.getByText(/Idade:/)).toBeInTheDocument()
      expect(screen.getByText("25")).toBeInTheDocument()
      expect(screen.getByText(/Origem:/)).toBeInTheDocument()
      expect(screen.getByText("Winterfell")).toBeInTheDocument()
    })

    it("deve renderizar todas as seções", async () => {
      const params = Promise.resolve({ slug: "jon-snow" })
      const component = await Page({ params })
      
      render(component)

      expect(screen.getByText("História")).toBeInTheDocument()
      expect(screen.getByText("Jon Snow é um personagem importante...")).toBeInTheDocument()
      expect(screen.getByText("Habilidades")).toBeInTheDocument()
      expect(screen.getByText("Excelente espadachim")).toBeInTheDocument()
    })

    it("deve converter slug para lowercase ao buscar personagem", async () => {
      const params = Promise.resolve({ slug: "JON-SNOW" })
      await Page({ params })

      expect(getEntryBySlug).toHaveBeenCalledWith("jon-snow")
    })
  })
})

describe("generateMetadata", () => {
  it("deve retornar o nome do personagem como título", async () => {
    const mockCharacter = { name: "Jon Snow", slug: "jon-snow" }
    vi.mocked(getEntryBySlug).mockResolvedValue(mockCharacter as any)

    const params = Promise.resolve({ slug: "jon-snow" })
    const metadata = await generateMetadata({ params })

    expect(metadata.title).toBe("Jon Snow")
  })

  it("deve retornar o slug como título se personagem não for encontrado", async () => {
    vi.mocked(getEntryBySlug).mockResolvedValue(null)

    const params = Promise.resolve({ slug: "nao-existe" })
    const metadata = await generateMetadata({ params })

    expect(metadata.title).toBe("nao-existe")
  })

  it("deve converter slug para lowercase ao buscar metadata", async () => {
    vi.mocked(getEntryBySlug).mockResolvedValue(null)

    const params = Promise.resolve({ slug: "JON-SNOW" })
    await generateMetadata({ params })

    expect(getEntryBySlug).toHaveBeenCalledWith("jon-snow")
  })
})

describe("generateStaticParams", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("deve retornar array de slugs em lowercase", async () => {
    // Mock da função getAllSlugs que agora busca do Supabase
    vi.mocked(getAllSlugs).mockResolvedValue([
      "Jon-Snow",
      "Arya-Stark",
    ])

    const result = await generateStaticParams()

    expect(result).toEqual([
      { slug: "jon-snow" },
      { slug: "arya-stark" },
    ])
  })

  it("deve chamar getAllSlugs do Supabase", async () => {
    vi.mocked(getAllSlugs).mockResolvedValue([])

    await generateStaticParams()

    expect(getAllSlugs).toHaveBeenCalledTimes(1)
  })

  it("deve retornar array vazio se não houver dados", async () => {
    vi.mocked(getAllSlugs).mockResolvedValue([])

    const result = await generateStaticParams()

    expect(result).toEqual([])
  })

})