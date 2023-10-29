import { useQuery } from '@apollo/client'
import { TypeOfContact } from '@/schema/useContract'
import { getArrayFromLocalStorage} from '@/schema/useLocalStorage'
import Menu from '@/components/Menu/Menu'
import Card from '@/components/Card/Card'
import Avatar from '@/assets/avatar-2.png'
import Contact from '@/schema/useContact'
import Container from '@/components/Container/Container'

const ElementProses = () => {
  const { getContact } = Contact
  const { loading, error, data } = useQuery(getContact)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>
  const idFavoriteContact = getArrayFromLocalStorage('favoriteContact')

  return (
    <>
      <Menu addContact='Add' myContact='My Contact' favoriteContact='Favorite' />
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
      {data.contact.map((detail: TypeOfContact) => {
        if (!idFavoriteContact.includes(detail.id)) {
          return (
            <Card
              imgSrc={Avatar}
              key={detail.id}
              title={detail.first_name}
              text={detail.phones[0].number}
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
