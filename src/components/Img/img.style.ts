import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface StylePosisition {
    position?: string
}

const imgWrapper = (params: StylePosisition) => css`
	display: flex;
	justify-content: ${params.position};
`
interface StyleWidthHeight {
    width: number
    height: number
}
const imgStyle = (params: StyleWidthHeight) => css`
    width: ${params.width}px;
    height: ${params.height}px;
`
export const ImgWraper = styled.div`
	${imgWrapper}
`
export const ImgStyled = styled.img`
    ${imgStyle}
`