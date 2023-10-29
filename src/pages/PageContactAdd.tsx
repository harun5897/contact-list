import Avatar from '@/assets/avatar-2.png'
import Img from '@/components/Img/Img'
import Feature from '@/components/Feature/Feature'
import Container from '@/components/Container/Container'
import MenuAdd from '@/components/Menu/MenuAdd'
import ContactAdd from '@/components/Contact/ContactAdd'

const ElementContactAdd = () => {
    return (
        <><MenuAdd /><br />
            <Img 
                position='center' 
                src={Avatar} 
                width={100} 
                height={100} 
            />
            <Feature />
        <ContactAdd /></>
    )
}
export default function PageContactAdd() {
    return ( 
        <Container children={ ElementContactAdd() } />
    )
}