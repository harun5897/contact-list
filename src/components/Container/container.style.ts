import { css } from '@emotion/react'
import styled from '@emotion/styled'

const containerWrapperStyle = () => css`
	width: 100%;
	display: flex;
	justify-content: center;
`
const containerBoxStyle = () => css`
	width: 400px;
	background-color: white;
	padding: 30px 20px;
	border-radius: 10px;
	box-shadow: 0 0 5px 5px rgba(0, 0, 0, .15);
`
export const ContainerWrapper = styled.div`
	${containerWrapperStyle}
`
export const ContainerBox = styled.div`
	${containerBoxStyle}
`