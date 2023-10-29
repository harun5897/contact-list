import { TextLabel } from './text.style'

interface LabelProps {
    text: string
}
export default function Label (props: LabelProps) {
    return (
        <TextLabel>{props.text}</TextLabel>
    )
}