import { css } from '@emotion/react'
import styled from '@emotion/styled'

const menuWrapperStyle = () => css`
    margin-bottom: 5px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background-color: white;
`
const menuBoxStyle = () => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
    border-bottom: 3px solid #ea4c89;
    margin-bottom: 5px;
`
const menuTitle = () => css`
    font-size: 16px;
    color: #ea4c89;
    padding: 7px;
    cursor: pointer;
    &:hover {
        background-color: #ea4c89;
        border-radius: 7px;
        opacity: 0.5;
        color: white;
    }
`
export const MenuWrapper = styled.div`
	${menuWrapperStyle}
`
export const MenuBox = styled.div`
    ${menuBoxStyle}
`
export const MenuTitle = styled.label`
    ${menuTitle}    
`