import { 
    MenuWrapper,
    MenuBox,
    MenuTitle
} from './menu.style'
import { NavLink } from "react-router-dom"

export default function MenuAdd () {
    return (
        <MenuWrapper>
            <MenuBox>
                <NavLink to='/'>
                    <MenuTitle> Back </MenuTitle>
                </NavLink>
            </MenuBox>
        </MenuWrapper>
    )
}