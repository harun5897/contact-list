import { useQuery, useMutation } from '@apollo/client'
import { useParams, NavLink, useNavigate } from 'react-router-dom'
import Img from '@/components/Img/Img'
import Button from '@/components/Button/Button'
import Avatar from '@/assets/avatar-2.png'
import Feature from '@/components/Feature/Feature'
import Contact from '@/components/Contact/Contact'
import Paragraph from '@/components/Text/TextParagraph'
import Container from '@/components/Container/Container'
import MenuDetail from '@/components/Menu/MenuDetail'
import ContactDetail from '@/schema/useContact'
import { useState } from 'react'

const ElementContactDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [deleteSuccess, setDeleteSuccess] = useState<boolean>(false)
    const { getContactDetail, deleteContactPhonne } = ContactDetail
    const [ deleteContactNumber, { error }] = useMutation(deleteContactPhonne)
    const { loading, data } = useQuery(getContactDetail, { variables: { "id": id } })
    const deleteContact = async () => {
        try {
            const { data } = await deleteContactNumber({variables: { id: id }})
            if(data) {
                setDeleteSuccess(true)
                setTimeout(() => {
                    navigate('/')
                    window.location.reload() 
                }, 1000)
            }
        } catch (e) { return false }
    }
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
            <Button text='Delete' onClick={ deleteContact } />
            {deleteSuccess && <Paragraph text='Delete Contact Success'/> }
        </>
    )
}
export default function PageContactDetail() {
    return ( 
        <Container children={ ElementContactDetail() } />
    )
}