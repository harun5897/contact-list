import { 
    ImgWraper, 
    ImgStyled
} from './img.style'

interface ImgProps {
    position: string
    width: number
    height: number
    src: string
}
export default function Img(props: ImgProps) {
    return (
        <ImgWraper position={ props.position }>
            <ImgStyled 
                width={ props.width } 
                height={ props.height } 
                src={ props.src } 
            />
        </ImgWraper>
    )
}