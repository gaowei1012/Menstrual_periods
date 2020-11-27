import React from 'react'
import { TextInput, ReturnKeyType, ReturnKeyTypeAndroid, ReturnKeyTypeIOS } from 'react-native'
import styles from '../../styles/components/input'

type ReturnKeyTypeOptions = ReturnKeyType | ReturnKeyTypeAndroid | ReturnKeyTypeIOS

type NativeInputType = {
    /** 获取值的回调  */
    onChangeText?: (val: any) => void
    /** 文本输入提示 */
    placeholder?: string
    /** 输入字符的长度 */
    lenght?: number
    /** secureTextEntry */
    secureTextEntry?: boolean
    /** 软键盘 returnKeyType */
    returnKeyType?: ReturnKeyTypeOptions
    /** placeholder color */
    placeholderTextColor?: string
    /** 失去焦点时调用 */
    onBlur?: () => void
}

const NativeInput: React.FC<NativeInputType> = ({
    onChangeText,
    placeholder,
    lenght,
    secureTextEntry,
    returnKeyType,
    placeholderTextColor,
    onBlur,
}) => {
    return (
        <TextInput
            style={styles.inputStyle}
            onChangeText={onChangeText}
            placeholder={placeholder}
            maxLength={lenght}
            secureTextEntry={secureTextEntry}
            returnKeyType={returnKeyType}
            onBlur={onBlur}
            placeholderTextColor={placeholderTextColor}
        />
    )
}

export { NativeInput }
