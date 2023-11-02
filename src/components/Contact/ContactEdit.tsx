import {
    ContactWrapper,
    ContactDetail,
    ContactLabel,
} from './contact.style'
import Input from '@/components/Input/Input'
import Button from '@/components/Button/Button'
import Paragraph from '@/components/Text/TextParagraph'
import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { useNavigate } from "react-router-dom"
import Contact from '@/schema/useContact'
import { TypeOfContact } from '@/schema/useContract'

export default function ContactEdit(props: TypeOfContact ) {
    const [firstName, setFirstName] = useState<string | number>('')
    const [lastName, setLastName] = useState<string | number>('')
    const [phoneNumber, setPhoneNumber] = useState<string | number>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)
    const [required, setRequired] = useState<boolean>(false)

    useEffect(() => {
        setFirstName(props.first_name)
        setLastName(props.last_name)
        setPhoneNumber(props.phones[0].number)
    }, [props.first_name, props.last_name, props.phones])

    const getFirstName = (value: string | number) => setFirstName(value)
    const getLastName = (value: string | number) => setLastName(value)
    const getPhoneNumber = (value: string | number) => setPhoneNumber(value)

    const { editContact, editPhoneNumber } = Contact
    const [postNumber, { error }] = useMutation(editPhoneNumber)
    const [postContact] = useMutation(editContact)
    const navigate = useNavigate()

    const trigerPostNumber = async () => {
        setLoading(true)
        setRequired(false)
        if(!firstName || !lastName || !phoneNumber) {
            setRequired(true)
            setLoading(false)
        } else {
            try {
                const { data } = await postNumber({
                    variables: { 
                        pk_columns: { number: props.phones[0].number, contact_id: props.id },
                        new_phone_number: phoneNumber
                    }
                })
                if(data) { return true }
            } catch (e) { return false }
        }
    }
    const trigerPostContact = async () => {
        const resUpdatePhoneNumber = await trigerPostNumber()
        if(resUpdatePhoneNumber) {
            try {
                const { data } = await postContact({
                    variables: { id: props.id, 
                        _set: { first_name: firstName, last_name: lastName }
                    }
                })
                if(data) {
                    setSuccess(true)
                    setTimeout(() => {
                        navigate(`/contact/${props.id}`)
                        setSuccess(false)
                    }, 100)
                }
                setLoading(false)
            }   catch (e) { setLoading(false) }
        }
    }
    return (
        <>
        <ContactWrapper>
            <ContactLabel><Paragraph text='First Name' /></ContactLabel>
            <ContactDetail><Input placeholder='' value={firstName} type='strings' onValueChange={ getFirstName } /></ContactDetail>
            <ContactLabel><Paragraph text='Last Name' /></ContactLabel>
            <ContactDetail><Input placeholder='' value={lastName} type='strings' onValueChange={ getLastName } /></ContactDetail>
            <ContactLabel><Paragraph text='Phone Number' /></ContactLabel>
            <ContactDetail><Input placeholder='' value={phoneNumber} type='numbers' onValueChange={ getPhoneNumber } /></ContactDetail>
        </ContactWrapper><br />
        <Button text='Save' onClick={ trigerPostContact }></Button>
        { loading && <Paragraph text='Loading...'/> }
        { success && <Paragraph text='Data has been successfully saved'/> }
        { required && <Paragraph text='Please fill out all required fields'/> }
        { error && <Paragraph text='Phone number already exists in our records'/> }
        </>
    )
}