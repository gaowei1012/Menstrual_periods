import { StyleSheet } from 'react-native'
import { px2dp } from '../../utils/px2dp'

const styles = StyleSheet.create({
    verificationInput: {
        width: px2dp(42),
        height: px2dp(42),
        borderRadius: px2dp(6),
        borderColor: '#bbb',
        borderWidth: px2dp(0.5),
        borderStyle: 'solid',
        backgroundColor: '#FFFDFD',
        textAlign: 'center',
        fontSize: px2dp(16),
    },
})

export default styles
