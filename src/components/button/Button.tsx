import React from 'react'
import styles from '../../styles/components/button'
import { TouchableOpacity, Text } from 'react-native'

type nativeButtonType = {
    content?: string
    /** 触发回调函数 */
    onPress?: () => void
    /** margin top 顶部高度 */
    top?: number
}

const NativeButtion: React.FC<nativeButtonType> = ({ content, onPress, top }) => {
    return (
        <TouchableOpacity style={[styles.buttonStyle, { marginTop: top }]} onPress={onPress} activeOpacity={1}>
            <Text style={styles.text}>{content}</Text>
        </TouchableOpacity>
    )
}

export { NativeButtion }
