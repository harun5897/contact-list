import { 
    ContainerWrapper, 
    ContainerBox
} from './container.style'

interface ElemenetProps {
    children: React.ReactNode
}
export default function Container(props: ElemenetProps) {
    return (
        <ContainerWrapper>
            <ContainerBox>
                { props.children }
            </ContainerBox>
        </ContainerWrapper>
    )
}