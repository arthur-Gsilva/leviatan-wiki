type Props = {
    title: string,
    subtitle: string
}

export const TitleBox = ({ title, subtitle }: Props) => {
    return(
        <div className="mb-8 pb-6 border-b border-[#8FC3D5]/20">
            <p
                className="text-xs uppercase tracking-[0.25em] mb-2"
                style={{ fontFamily: "'Cinzel', serif" }}
            >
                {subtitle}
            </p>
            <h1
                className="text-3xl sm:text-4xl font-bold text-white"
                style={{ fontFamily: "'Cinzel', serif", textShadow: "0 2px 12px rgba(143,195,213,0.2)" }}
            >
                {title}
            </h1>
        </div>
    )
}