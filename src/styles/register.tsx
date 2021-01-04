import { StyleSheet } from 'react-native'
import { px2dp } from '../utils/px2dp'

const styles = StyleSheet.create({
    registerContainer: {
        flex: 1,
    },
    registerContent: {
        width: px2dp(350),
        alignSelf: 'center',
        marginTop: px2dp(60),
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
    },
    registerInput: {
        alignSelf: 'center',
        marginTop: px2dp(60),
    },
    fot: {
        width: px2dp(92),
        marginTop: px2dp(20),
    },
})

export default styles
