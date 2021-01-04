import { StyleSheet } from 'react-native'
import { px2dp } from '../../utils/px2dp'

const styles = StyleSheet.create({
    inputStyle: {
        width: px2dp(280),
        height: px2dp(38),
        marginBottom: px2dp(30),
        backgroundColor: '#FFFBFB',
        borderRadius: px2dp(18),
        textAlign: 'center',
        // 设置阴影
        shadowColor: '#999',
        fontFamily: 'PingFang SC',
        shadowOffset: { width: 1, height: 6 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 1.5, // 支持 android
    },
})

export default styles
