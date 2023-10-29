import { TextParagraph } from './text.style'

interface ParagraphProps {
    text: string
}
export default function Paragraph (props: ParagraphProps) {
    return (
        <TextParagraph>{props.text}</TextParagraph>
    )
}