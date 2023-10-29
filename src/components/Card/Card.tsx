import { NavLink } from 'react-router-dom'
import {
    CardWrapper,
    CardContainer,
    CardImage,
    CardContent,
    CardTitle,
    CardText,
    CardContentItem,
} from './card.style'
import Img from  '@/components/Img/Img'
import Favorite from '@/assets/favorit.png'
import Star from '@/assets/star.png'

interface CardProps {
    imgSrc: string
    title: string
    text: string
    id?: number
    favorite?: boolean
}
export default function Card(props: CardProps) {
    return (
        <CardWrapper>
            <NavLink to={`/contact/${props.id}`}>
            <CardContainer>
                <CardImage src={ props.imgSrc }/>
                <CardContent>
                    <CardContentItem>
                        <CardTitle>{ props.title }</CardTitle>
                        <CardText>{ props.text }</CardText>
                    </CardContentItem>
                    <Img 
                        position='end'
                        src={ props.favorite ? Favorite : Star}
                        width={20} 
                        height={20} 
                    />
                </CardContent>
            </CardContainer>
            </NavLink>
        </CardWrapper>
    )
}