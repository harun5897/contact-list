import { 
    MenuWrapper,
    MenuBox,
    MenuTitle
} from './menu.style'
import { NavLink } from "react-router-dom"

interface MenuProps {
    addContact: string
    myContact: string
    favoriteContact: string
}
export default function Menu(props: MenuProps) {
    return (
        <MenuWrapper>
            <MenuBox>
                <NavLink to='/add-contact'>
                    <MenuTitle>{ props.addContact }</MenuTitle>
                </NavLink>
                <NavLink to='/'>
                    <MenuTitle>{ props.myContact }</MenuTitle>
                </NavLink>
                <NavLink to='/favorite-contact'>
                    <MenuTitle>{ props.favoriteContact }</MenuTitle>
                </NavLink>
            </MenuBox>
        </MenuWrapper>
    )
}
