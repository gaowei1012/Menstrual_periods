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
})

export default styles
