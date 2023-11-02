import { css } from '@emotion/react'
import styled from '@emotion/styled'

const buttonStyle = () => css`
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    background-color: #ea4c89;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        background-color: #F67280;
    }
    margin: 3px;
`
export const ButtonStyled = styled.button`
	${buttonStyle}
`