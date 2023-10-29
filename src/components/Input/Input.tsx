import {InputWrapper } from './input.style'
import { ChangeEvent, useState } from 'react'
import { isAlphabet, isNumeric } from '@/schema/useValidatorInput'

export default function Input (props: { type: string; onValueChange: (value: string | number) => void }) {
    const [inputValue, setInputValue] = useState<string|number>('')

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
            />
        )
}