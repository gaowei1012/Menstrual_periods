import { StyleSheet } from 'react-native'
import { px2dp } from '../../utils/px2dp'

const styles = StyleSheet.create({
    listBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#EDEAF4',
        borderBottomWidth: px2dp(1),
        paddingVertical: px2dp(20),
        width: px2dp(284),
        alignSelf: 'center',
    },
    leftBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftText: {
        marginLeft: px2dp(18),
    },
    imageBox: {
        width: px2dp(24),
        height: px2dp(24),
    },
})

export default styles
