import { css } from '@emotion/react'
import styled from '@emotion/styled'

const featureWrapperStyle = () => css`
	display: flex;
    justify-content: space-between;
    padding: 30px 40px;
    @media (max-width: 450px) {
        padding: 30px 0px;
    }
`
const featureContainerStyle = () => css`
    color: #ea4c89;
    text-align: center;
    cursor: pointer;
    width: 100px;
   
`
const featureLabelStyle = () => css`
    font-size: 14px;
    font-weight: 600;
    margin-top: 5px;
`
export const FeatureWrapper = styled.div`
    ${featureWrapperStyle}
`
export const FeatureContainer = styled.div`
    ${featureContainerStyle}
`
export const FeatureLabel = styled.label`
    ${featureLabelStyle}
`