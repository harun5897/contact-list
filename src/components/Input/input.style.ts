import { css } from '@emotion/react'
import styled from '@emotion/styled'

const inputWrapperStyle = () => css`
    width: 100%;
    padding: 8px 15px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    border-color: #ea4c89;
    outline: none;
`
export const InputWrapper = styled.input`
	${inputWrapperStyle}
`
