/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from '@apollo/client'
import { TypeOfContact } from '@/schema/useContract'
import { getArrayFromLocalStorage} from '@/schema/useLocalStorage'
import Menu from '@/components/Menu/Menu'
import Card from '@/components/Card/Card'
import Avatar from '@/assets/avatar-2.png'
import Contact from '@/schema/useContact'
import Container from '@/components/Container/Container'
import { useState, useEffect } from 'react'

const ElementProses = () => {
    const [search, setSearch] = useState<string|number>('')
    const { getContact } = Contact
    const { loading, error, data, refetch } = useQuery(getContact)

    const getSearch = (value: string | number) => setSearch(value)

    useEffect(() => {
        if(search.toString().length > 3)
            refetch ({ offset: 0, limit: 10, where: { first_name: {_like: `%${search}%`}} })
        if(search.toString().length == 1) 
            refetch ({ offset: 0, limit: 10, where: { first_name: {_like: `%%`}} })
    },[search])
    
    const idFavoriteContact = getArrayFromLocalStorage('favoriteContact')
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error.message}</p>

    return (
    <>
        <Menu addContact='Add' myContact='My Contact' favoriteContact='Favorite' dataSearch={ getSearch } />
        {data.contact.map((detail: TypeOfContact) => {
        if (idFavoriteContact.includes(detail.id)) {
            return (
                <Card
                imgSrc={Avatar}
                key={detail.id}
                title={detail.first_name}
                text={detail.phones[0].number}
                id={detail.id}
                favorite={true}
            />
          )
        }
      })}
    </>
  )
}
export default function PageContactFavorite() {
    return ( 
        <Container children={ ElementProses() } />
    )
}

