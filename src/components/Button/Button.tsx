import { ButtonStyled }  from './button.style'

interface ButtonProps {
    text: string
    onClick: () => void
}
export default function Button (props: ButtonProps) {
    const handleClick = () => {
        props.onClick()
      }
    return (
        <ButtonStyled onClick={handleClick}>
            { props.text }
        </ButtonStyled>
    )
}