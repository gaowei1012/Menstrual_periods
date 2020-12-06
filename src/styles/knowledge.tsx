import { StyleSheet } from 'react-native'
import { px2dp } from '../utils/px2dp'

const styles = StyleSheet.create({
    KnowledgeContainer: {
        flex: 1,
    },
    listBox: {
        width: px2dp(340),
        height: px2dp(144),
        borderRadius: px2dp(6),
        borderWidth: px2dp(0.5),
        borderColor: '#CACACA',
        alignSelf: 'center',
    },
    imageBox: {
        width: px2dp(320),
        height: px2dp(94),
        alignSelf: 'center',
        marginTop: px2dp(7),
    },
    listBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: px2dp(318),
        alignSelf: 'center',
        marginTop: px2dp(13),
    },
})

export default styles
