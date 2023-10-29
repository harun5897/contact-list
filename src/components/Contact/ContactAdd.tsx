import {
    ContactWrapper,
    ContactDetail,
    ContactLabel,
} from './contact.style'
import Input from '@/components/Input/Input'
import Button from '@/components/Button/Button'
import Paragraph from '@/components/Text/TextParagraph'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useNavigate } from "react-router-dom"
import Contact from '@/schema/useContact'

export default function ContactAdd() {
    const [firstName, setFirstName] = useState<string | number>('')
    const [lastName, setLastName] = useState<string | number>('')
    const [phoneNumber, setPhoneNumber] = useState<string | number>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)
    const [required, setRequired] = useState<boolean>(false)

    const getFirstName = (value: string | number) => setFirstName(value)
    const getLastName = (value: string | number) => setLastName(value)
    const getPhoneNumber = (value: string | number) => setPhoneNumber(value)

    const { addContact } = Contact
    const [postContact, { error }] = useMutation(addContact)
    const navigate = useNavigate()
   
    const trigerPostContact = async () => {
        setLoading(true)
        if(!firstName || !lastName || !phoneNumber) {
            setRequired(true)
            setLoading(false)
        } else {
            setRequired(false)
            try {
                const { data } = await postContact({
                    variables: { 
                    first_name: firstName,
                    last_name: lastName,
                    phones: [{ number: phoneNumber }]
                    }
                })
                if(data) {
                    setSuccess(true)
                    setTimeout(() => {
                        navigate('/')
                        setSuccess(false)
                    }, 1500)
                }
                setLoading(false)
            }   catch (e) { setLoading(false) }
        }
    }
    return (
        <>
        <ContactWrapper>
            <ContactLabel><Paragraph text='First Name' /></ContactLabel>
            <ContactDetail><Input value={''} type='strings' onValueChange={ getFirstName } /></ContactDetail>
            <ContactLabel><Paragraph text='Last Name' /></ContactLabel>
            <ContactDetail><Input value={''} type='strings' onValueChange={ getLastName } /></ContactDetail>
            <ContactLabel><Paragraph text='Phone Number' /></ContactLabel>
            <ContactDetail><Input value={''} type='numbers' onValueChange={ getPhoneNumber } /></ContactDetail>
        </ContactWrapper><br />
        <Button text='Save' onClick={ trigerPostContact }></Button>
        { loading && <Paragraph text='Loading...'/> }
        { success && <Paragraph text='Data has been successfully saved'/> }
        { required && <Paragraph text='Please fill out all required fields'/> }
        { error && <Paragraph text='Phone number already exists in our records'/> }
        </>
    )
}