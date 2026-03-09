import { CrewsCarousel } from "@/components/Carousel-Area"
import { ContentBox } from "@/components/ContentBox"
import { MemberCard } from "@/components/staticpage/MemberCard"
import { TitleBox } from "@/components/TitleBox"
import { getCrew, getCrews } from "@/services/wiki"
import Link from "next/link"

const page = async () => {

    const crews = await getCrews()

    return (
        <div>
            <ContentBox>

                <TitleBox
                    subtitle="Bem vindo(a) à"
                    title="Leviatã Wiki"
                />
                <div
                    className="flex flex-col gap-5 text-[15px] leading-relaxed"
                    style={{ color: "rgb(220 235 245 / 0.85)" }}
                >
                    <p>
                        Aqui você encontrará as mais diversas informações sobre o RPG de mesa{" "}
                        <span className="font-medium" style={{ color: "rgb(var(--p))" }}>OP — Leviatã</span>: um mundo
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
                            background: "rgb(var(--p) / 0.07)",
                            border: "1px solid rgb(var(--p) / 0.18)",
                        }}
                    >
                        <p
                            className="text-sm mb-1 uppercase tracking-widest"
                            style={{ fontFamily: "'Cinzel', serif", fontSize: "10px", color: "rgb(var(--p) / 0.8)" }}
                        >
                            Por onde começar
                        </p>
                        <p className="text-sm" style={{ color: "rgb(220 235 245 / 0.8)" }}>
                            Se você está chegando agora ou não sabe ao certo por onde começar,
                            recomendamos conhecer primeiro os protagonistas da história:
                        </p>
                        <Link
                            href="/wiki/bando_do_eclipse"
                            className="inline-flex items-center gap-2 mt-3 text-sm font-semibold hover:text-white transition-colors group"
                            style={{ fontFamily: "'Cinzel', serif", color: "rgb(var(--p))" }}
                        >
                            <span
                                className="h-px group-hover:w-6 transition-all duration-300"
                                style={{ width: "1rem", background: "rgb(var(--p))" }}
                            />
                            Bando do Eclipse
                        </Link>
                    </div>

                    <div className="mt-4">
                        {crews &&
                            <CrewsCarousel 
                                crews={crews}
                            />
                        }
                        
                    </div>
                </div>
            </ContentBox>
        </div>
    )
}

export default page