import React from 'react'
import { TextInput } from 'react-native'
import styles from '../../styles/components/verification'

type VerifiInputType = {
    placeholder?: string
    placeholderTextColor?: string
    onChangeText?: (val: string) => void
    onBlur?: () => void
}

const VerifiInput: React.FC<VerifiInputType> = ({ placeholder, placeholderTextColor, onChangeText, onBlur }) => {
    return (
        <TextInput
            style={styles.verificationInput}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            onChangeText={onChangeText}
            onBlur={onBlur}
            maxLength={1}
        />
    )
}

export { VerifiInput }
