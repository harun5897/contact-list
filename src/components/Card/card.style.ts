import { css } from '@emotion/react'
import styled from '@emotion/styled'

const cardWrapperStyle = () => css`
	a { text-decoration: none; }
`
const cardContainerStyle = () => css`
    display: flex; 
    align-items: center;
    cursor: pointer; 
    border-radius: 5px; 
    padding: 10px 10px; 
    &:hover { 
        background-color: #EFEFEF;
    }
`
const cardImageStyle = () => css`
    width: 50px;
    height: 50px;
`
const cardContentStyle = () => css`
    margin-left: 10px; 
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const cardTitleStyle = () => css`
    font-size: 17px; 
    color: black;
`
const cardTextStyle = () => css`
    font-size: 14px; 
    color: #8A8A8D; 
    margin: 5px 0 0 0;
`
const cardContentItemStyle = () => css`
    
`
export const CardWrapper = styled.div`
	${cardWrapperStyle}
`
export const CardContainer = styled.div`
	${cardContainerStyle}
`
export const CardImage = styled.img`
    ${cardImageStyle}
`
export const CardContent = styled.div`
    ${cardContentStyle}
`
export const CardTitle = styled.label`
    ${cardTitleStyle}
`
export const CardText = styled.p`
    ${cardTextStyle}
`
export const CardContentItem = styled.div`
    ${cardContentItemStyle}
`