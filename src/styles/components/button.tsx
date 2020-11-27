import { StyleSheet } from 'react-native'
import { px2dp } from '../../utils/px2dp'

const styles = StyleSheet.create({
    buttonStyle: {
        height: px2dp(38),
        width: px2dp(280),
        backgroundColor: '#716AB8',
        borderRadius: px2dp(18),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#716AB8',
        fontFamily: 'PingFang SC',
        shadowOffset: { width: 1, height: 6 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 1.5, // 支持 android
    },
    text: {
        color: '#fff',
        fontSize: px2dp(16),
    },
})

export default styles
