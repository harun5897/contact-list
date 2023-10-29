import { 
    MenuWrapper,
    MenuBox,
    MenuTitle
} from './menu.style'
import { 
    saveArrayToLocalStorage, 
    getArrayFromLocalStorage 
} from '@/schema/useLocalStorage'
import { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom"
import Favorite from '@/assets/favorit.png'
import Star from '@/assets/star.png'
import Img from '@/components/Img/Img'

export default function MenuDetail( props: {idContact: number}) {
    const [setFavorite, setStateFavorite] = useState<boolean>(false)
    const [stateFavoriteContact, setstateFavoriteContact] = useState<number[]>([])
    
    useEffect(() => {
        const dataFavoriteContact = getArrayFromLocalStorage('favoriteContact')
        if (dataFavoriteContact.length > 0) {
            setstateFavoriteContact(dataFavoriteContact)
        } else {
            saveArrayToLocalStorage('favoriteContact', [])
        }
    }, [])
    useEffect(() => {
        const updatedFavoriteContacts = [...stateFavoriteContact]
        if (!updatedFavoriteContacts.includes(props.idContact)) {
            setStateFavorite(false)
        } else {
            setStateFavorite(true)
        }
    }, [props.idContact, stateFavoriteContact])

    const trigerFavorite = (id: number) => {
        let updatedFavoriteContacts = [...stateFavoriteContact]
        if (!updatedFavoriteContacts.includes(id)) {
            updatedFavoriteContacts.push(id)
            saveArrayToLocalStorage('favoriteContact', updatedFavoriteContacts)
            setStateFavorite(true)
        } else {
            updatedFavoriteContacts = updatedFavoriteContacts.filter((contactId) => contactId !== id)
            saveArrayToLocalStorage('favoriteContact', updatedFavoriteContacts)
            setStateFavorite(false)
        }
        setstateFavoriteContact(updatedFavoriteContacts)
    }
    return (
        <MenuWrapper>
            <MenuBox>
                <NavLink to='/'>
                    <MenuTitle> Back </MenuTitle>
                </NavLink>
                <MenuTitle onClick={() => trigerFavorite(props.idContact)}>
                    <Img 
                        position='center' 
                        width={20} 
                        height={20} 
                        src={setFavorite ? Favorite : Star} />
                    </MenuTitle>
            </MenuBox>
        </MenuWrapper>
    )
}
