import {
    ContactWrapper,
    ContactDetail,
    ContactLabel,
} from './contact.style'
import Paragraph from '@/components/Text/TextParagraph'
import { TypeOfContact } from '@/schema/useContract'

export default function Contact(props: TypeOfContact) {
    return (
        <ContactWrapper>
            <ContactLabel>
                <Paragraph text='First Name' />
                <Paragraph text='Last Name' />
                <Paragraph text='Phone Number' />
            </ContactLabel>
            <ContactDetail>
                <Paragraph text={`: ${props.first_name}`} />
                <Paragraph text={`: ${props.last_name}`} />
                <Paragraph text={`: ${props.phones[0].number}`} />
            </ContactDetail>
        </ContactWrapper>
    )
}