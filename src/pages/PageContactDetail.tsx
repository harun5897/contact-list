import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Img from '@/components/Img/Img'
import Button from '@/components/Button/Button'
import Avatar from '@/assets/avatar-2.png'
import Feature from '@/components/Feature/Feature'
import Contact from '@/components/Contact/Contact'
import Container from '@/components/Container/Container'
import MenuDetail from '@/components/Menu/MenuDetail'
import ContactDetail from '@/schema/useContact'

const ElementContactDetail = () => {
    const { id } = useParams()
    const { getContactDetail } = ContactDetail
    const { loading, error, data } = useQuery(getContactDetail, {
        variables: { "id": id },
    })
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error.message}</p>
    
    return (
        <>
            <MenuDetail idContact={data.contact_by_pk.id} /><br/>
            <Img 
                position='center' 
                src={Avatar} 
                width={100} 
                height={100} 
            />
            <Feature />
            <Contact 
                first_name={data.contact_by_pk.first_name} 
                last_name={data.contact_by_pk.last_name} 
                phones={data.contact_by_pk.phones} 
                id={data.contact_by_pk.id}
            /><br/>
            <NavLink to={`/edit-contact/${data.contact_by_pk.id}`}>
                <Button text='Edit' onClick={()=> {}} />
            </NavLink>
        </>
    )
}
export default function PageContactDetail() {
    return ( 
        <Container children={ ElementContactDetail() } />
    )
}