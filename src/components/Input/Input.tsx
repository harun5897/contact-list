import {InputWrapper } from './input.style'
import { ChangeEvent, useState, useEffect  } from 'react'
import { isAlphabet, isNumeric } from '@/schema/useValidatorInput'

interface InputProps {
    value: string | number
    type: string
    placeholder: string
    onValueChange: (value: string | number) => void
}

export default function Input (props: InputProps) {
    const [inputValue, setInputValue] = useState<string|number>('')
    useEffect(() => {
        setInputValue(props.value)
    }, [props.value])
    const handleInputChange = (input: ChangeEvent<HTMLInputElement>) => {
        const value = input.target.value
        if (props.type === 'strings' && isAlphabet(value)) {
            setInputValue(value)
            props.onValueChange(value)
        } else if (props.type === 'numbers' && isNumeric(value)) {
            setInputValue(value)
            props.onValueChange(value)
        }
    }
    return (
            <InputWrapper
                type={props.type}
                value={inputValue}
                onChange={handleInputChange}
                placeholder={props.placeholder}
            />
        )
}