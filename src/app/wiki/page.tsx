import { ContentBox } from "@/components/ContentBox"
import { TitleBox } from "@/components/TitleBox"
import Link from "next/link"

const page = () => {
    return (
        <div>
            <ContentBox>

                <TitleBox 
                    subtitle="Bem vindo(a) à"
                    title="Leviatã Wiki"
                />
                <div
                    className="flex flex-col gap-5 text-[15px] leading-relaxed"
                    style={{ color: "rgba(220, 235, 245, 0.85)" }}
                >
                    <p>
                        Aqui você encontrará as mais diversas informações sobre o RPG de mesa{" "}
                        <span className="text-[#8FC3D5] font-medium">OP — Leviatã</span>: um mundo
                        construído sobre as águas turbulentas de Grand Line, onde piratas, marinha e
                        forças ocultas disputam o destino dos mares.
                    </p>

                    <p>
                        O objetivo desta biblioteca é ser um ponto de referência para os players —
                        seja para rever detalhes de sessões passadas, estudar PDNs (Personagens do
                        Narrador) antes de um encontro decisivo, ou simplesmente se aprofundar na
                        lore e nas facções que moldam a narrativa. Informações que seriam difíceis
                        de abordar à mesa têm espaço aqui.
                    </p>

                    <div
                        className="rounded-lg px-5 py-4 mt-1"
                        style={{
                            background: "rgba(143,195,213,0.07)",
                            border: "1px solid rgba(143,195,213,0.18)",
                        }}
                    >
                        <p className="text-sm text-[#8FC3D5]/80 mb-1 uppercase tracking-widest" style={{ fontFamily: "'Cinzel', serif", fontSize: "10px" }}>
                            Por onde começar
                        </p>
                        <p className="text-sm" style={{ color: "rgba(220,235,245,0.8)" }}>
                            Se você está chegando agora ou não sabe ao certo por onde começar,
                            recomendamos conhecer primeiro os protagonistas da história:
                        </p>
                        <Link
                            href="/bando-eclipse"
                            className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-[#8FC3D5] hover:text-white transition-colors group"
                            style={{ fontFamily: "'Cinzel', serif" }}
                        >
                            <span className="w-4 h-px bg-[#8FC3D5] group-hover:w-6 transition-all duration-300" />
                            Bando do Eclipse
                        </Link>
                    </div>
                </div>
            </ContentBox>
        </div>
    )
}

export default page