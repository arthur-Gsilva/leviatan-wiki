import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Cinzel } from "next/font/google"
import { ViewTransitions } from "next-view-transitions";



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
    <html lang="pt-br">
      <body
        className="min-h-screen min-w-screen"
            style={{
                backgroundImage: "url('https://images.wallpapersden.com/image/download/one-piece-anime_am1nZmuUmZqaraWkpJRobWllrWdma2U.jpg')",
                backgroundPosition: 'center',
                backgroundSize: "cover",
            }}
      >

        <ViewTransitions>
            <Header />
            {children}
        </ViewTransitions>
        
      </body>
    </html>
  );
}
