import { StyleSheet } from 'react-native'
import { px2dp } from '../utils/px2dp'
import { NAV_BAR_H } from './../utils/navBar_StatusBar_Height'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    statusBar: {},
    title: {
        width: px2dp(200),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    navBar: {
        paddingHorizontal: px2dp(15),
        height: NAV_BAR_H,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftBtnBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: px2dp(50),
    },
    navBarTitleContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightBtnBox: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: px2dp(60),
    },
})

export default styles
