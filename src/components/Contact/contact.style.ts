import { css } from '@emotion/react'
import styled from '@emotion/styled'

const contactWrapperStyle = () => css`
	width: 100%;
	display: grid;
    grid-template-columns: 110px auto;
    font-size: 14px;
`
const contactLabel = () => css`
    color: #ea4c89;
`
const contactDetail = () => css`
    color: black;
`
const contactGroup = () => css`
    display: flex;
`
export const ContactWrapper = styled.div`
	${contactWrapperStyle}
`
export const ContactLabel = styled.div`
    ${contactLabel}
`
export const ContactDetail = styled.div`
    ${contactDetail}
`
export const ContactGroup = styled.div`
    ${contactGroup}
`
