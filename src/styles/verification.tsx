import { StyleSheet } from 'react-native'
import { px2dp } from '../utils/px2dp'

const styles = StyleSheet.create({
    verification: {
        flex: 1,
    },
    verificationCode: {
        flexDirection: 'row',
        width: px2dp(300),
        alignSelf: 'center',
        justifyContent: 'space-around',
    },
    verificationText: {
        color: '#101010',
        fontFamily: 'PingFangSC-regular',
        fontSize: px2dp(18),
        alignSelf: 'center',
        marginVertical: px2dp(40),
    },
    sendCode: {
        marginVertical: px2dp(30),
        alignSelf: 'center',
    },
    timerBox: {},
    timerText: {},
})

export default styles
