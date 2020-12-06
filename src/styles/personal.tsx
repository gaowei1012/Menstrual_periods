import { StyleSheet } from 'react-native'
import { px2dp } from '../utils/px2dp'

const styles = StyleSheet.create({
    personal: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    headerBox: {
        height: px2dp(176),
        backgroundColor: '#7468BE',
        borderBottomLeftRadius: px2dp(40),
        borderBottomRightRadius: px2dp(40),
    },
    headerSetting: {
        alignSelf: 'flex-end',
        marginRight: px2dp(30),
        marginTop: px2dp(5),
    },
    contentBox: {
        width: px2dp(335),
        height: px2dp(536),
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: px2dp(30),
        position: 'relative',
        top: px2dp(-123),
    },
    avatarBox: {
        width: px2dp(100),
        height: px2dp(100),
        borderRadius: px2dp(50),
        backgroundColor: 'red',
        alignSelf: 'center',
        marginTop: px2dp(23),
    },
    avatarName: {
        marginTop: px2dp(10),
        alignSelf: 'center',
    },
})

export default styles
