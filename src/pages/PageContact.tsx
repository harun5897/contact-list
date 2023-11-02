/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from '@apollo/client'
import { TypeOfContact } from '@/schema/useContract'
import { getArrayFromLocalStorage} from '@/schema/useLocalStorage'
import { useEffect, useState } from 'react'
import Menu from '@/components/Menu/Menu'
import Card from '@/components/Card/Card'
import Avatar from '@/assets/avatar-2.png'
import Contact from '@/schema/useContact'
import Container from '@/components/Container/Container'

const ElementProses = () => {
    const [contact, setContact] = useState<Array<TypeOfContact>>([])
    const [offset, setOffset] = useState<number>(0)
    const [loadings, setLoadings] = useState<boolean>(false)

    const { getContact } = Contact
    const { loading, error, data, refetch } = useQuery(getContact, {
        variables: {
            offset: 0,
            limit: 10,
            order_by: [{id: 'desc'}]
        }
    })
    useEffect(() => {
        setLoadings(false)
        if(data && Array.isArray(data.contact)) {
        setContact(previous => [...previous, ...data.contact])
    }
    }, [data])

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight
            const currentHeight = window.innerHeight + window.scrollY
            if(currentHeight + 1 >= scrollHeight && !loadings) {
                setOffset(prev => prev + 5)
            }
        }
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
    },[])

    useEffect(()=> {
        if(data && data.contact.length > 0) {
            refetch ({ offset: offset, limit: 10 })
            setLoadings(true)
        }
    },[offset])
 
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error.message}</p>
    const idFavoriteContact = getArrayFromLocalStorage('favoriteContact')

    return (
    <>
        <Menu addContact='Add' myContact='My Contact' favoriteContact='Favorite' />
        {contact.map((detail: TypeOfContact, index: number) => {
            if (!idFavoriteContact.includes(detail.id)) {
                return (
                    <Card
                        imgSrc={Avatar}
                        key={index}
                        title={detail.first_name}
                        text={detail.phones[0] ? detail.phones[0].number : ''}
                        id={detail.id}
                        favorite={false}
                    />
                )
            }
        })}
    </>
  )
}
export default function PageContact() {
    return ( 
        <Container children={ ElementProses() } />
    )
}
