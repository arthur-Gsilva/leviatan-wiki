import { ContentBox } from "@/components/ContentBox"
import { TitleBox } from "@/components/TitleBox"
import { PoneglifViewer } from "./PoneglifViewer"
import { poneglyphs } from "@/data/poneglyph"


export default function page() {
    return (
        <ContentBox>
            <TitleBox
                subtitle="Os registros do Século Perdido"
                title="Poneglyphs"
            />
            <PoneglifViewer poneglyphs={poneglyphs} />
        </ContentBox>
    )
}