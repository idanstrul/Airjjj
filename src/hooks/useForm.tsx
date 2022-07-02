import { useState } from 'react'
import { useEffectUpdate } from './useEffectUpdate'

export const useForm = <T,>(initialState: T, cb = (fields: T) => { }) => {
    const [fields, setFields] = useState(initialState)

    useEffectUpdate(() => {
        cb(fields)
    }, [fields])


    const handleChange = ({ target }: { target: HTMLInputElement }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setFields(prevFields => ({ ...prevFields, [field]: value }))
    }

    return [fields, handleChange]
}
