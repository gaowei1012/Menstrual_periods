import { StyleSheet } from 'react-native'
import { px2dp } from '../utils/px2dp'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9f9',
    },
    loginContent: {
        width: px2dp(350),
        alignSelf: 'center',
        marginTop: px2dp(60),
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
    },
    loginLogo: {
        width: px2dp(120),
        height: px2dp(60),
        backgroundColor: 'red',
        alignSelf: 'center',
    },
    loginInput: {
        alignSelf: 'center',
        marginTop: px2dp(60),
    },
    fot: {
        width: px2dp(92),
        marginTop: px2dp(20),
        // borderBottomColor: 'blue',
        // borderBottomWidth: 0.5,
        // paddingBottom: px2dp(4),
    },
})

export default styles
