import Input from '../Input/Input'
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
    dataSearch: (value: string | number) => void
}

export default function Menu(props: MenuProps) {
    const dataInputSearch = (value: string | number) => props.dataSearch(value)
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
            <Input value={''} placeholder='Search' type='strings' onValueChange={dataInputSearch} />
        </MenuWrapper>
    )
}
