import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Cinzel } from "next/font/google"
import { ViewTransitions } from "next-view-transitions";
import { ThemeButton } from "@/components/ThemeButton";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" })

export const metadata: Metadata = {
  title: {
    template: "%s - Leviatã",
    default: "Wiki"
  },
  description: "Uma página de um fã e mestre de um RPG de One piece",
  icons: {
    icon: "/pirate.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: necessário pois o script inline altera
    // o atributo data-theme antes da hidratação do React, causando mismatch
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const t = localStorage.getItem('wiki-theme');
              if (t) document.documentElement.setAttribute('data-theme', t);
            })();
          `
        }} />
      </head>
      <body
        className="min-h-screen min-w-screen"
        style={{
          backgroundImage: "url('/logo2.png')",
          backgroundPosition: 'center',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/*
          Overlay que tinge o wallpaper com a cor do tema atual.
          mix-blend-mode: multiply faz a cor se misturar com a imagem sem cobrir o conteúdo.
          pointer-events: none garante que não bloqueia cliques.
          transition suaviza a troca de tema.
        */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            background: "rgb(var(--bg-700) / 0.10)",
            mixBlendMode: "plus-darker",
            pointerEvents: "none",
            transition: "background 0.5s ease",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <ViewTransitions>
            <Header />
            {children}
          </ViewTransitions>

          <ThemeButton />
        </div>
      </body>
    </html>
  );
}