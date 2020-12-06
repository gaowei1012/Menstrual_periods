import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import ArrowSvg from '../../../assets/svg/arrow_right.svg'
import styles from '../.././../styles/components/list'

type listType = {
    title?: string
    onPress?: () => void
    NoteSvg?: any
}

const List: React.FC<listType> = ({ title, onPress, NoteSvg }) => {
    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.listBox}>
            <View style={styles.leftBox}>
                {/* <NoteSvg width={24} height={24} /> */}
                {NoteSvg}
                <Text style={styles.leftText}>{title}</Text>
            </View>
            <ArrowSvg width={24} height={24} />
        </TouchableOpacity>
    )
}

export default List
