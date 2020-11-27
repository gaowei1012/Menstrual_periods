import { StyleSheet, Platform, Dimensions } from 'react-native'

export const CELL_SIZE: number = 50
export const CELL_BORDER_RADIUS: number = 8
export const DEFAULT_CELL_BG_COLOR: string = '#fff'
export const NOT_EMPTY_CELL_BY_COLOR: string = '#3557b7'
export const ACTIVE_CELL_BY_COLOR: string = '#f7fafe'

const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    codeFieldRoot: {
        height: CELL_SIZE,
        marginTop: 30,
        paddingHorizontal: 60,
    },
    cell: {
        marginHorizontal: 8,
        height: CELL_SIZE,
        width: CELL_SIZE,
        lineHeight: CELL_SIZE - 5,
        ...Platform.select({ web: { lineHeight: 65 } }),
        fontSize: 30,
        textAlign: 'center',
        borderRadius: CELL_BORDER_RADIUS,
        color: '#3759b8',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    root: {
        minHeight: height,
        justifyContent: 'center',
    },
    title: {
        paddingTop: 50,
        color: '#000',
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',
        paddingBottom: 40,
    },
    icon: {
        width: 217 / 2.4,
        height: 158 / 2.4,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    subTitle: {
        paddingTop: 30,
        color: '#000',
        textAlign: 'center',
    },
    nextButton: {
        marginTop: 30,
        borderRadius: 20,
        height: 40,
        backgroundColor: '#3557b7',
        justifyContent: 'center',
        minWidth: 300,
        marginBottom: 100,
        width: 200,
        alignSelf: 'center',
    },
    nextButtonText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#fff',
        fontWeight: '700',
    },
})

export default styles
