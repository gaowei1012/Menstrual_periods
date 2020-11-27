import React from 'react'
import styles from '../styles/topnavigationbar'
import { View, Text, StatusBar } from 'react-native'

// const DEFAULT_COLOR: string = '#85DFD2'
// const WITHE_COLOR: string = 'wihte'
// const INDEX_STATUTS_COLOR: string ='ragb(255, 255, 255, 0.1)'

type StatusBarShapeType = {
    /** 'light-content' | 'default' */
    barStyle?: any
    hidden?: boolean
    backgroundColor?: string
}

type NavigationBarType = {
    /** 状态栏动画 */
    animated?: boolean
    /** 字体大小 */
    fontSize?: number
    /** 字体颜色 */
    color?: string
    /** 状态栏 */
    statusBar: StatusBarShapeType
    /** 样式 */
    style?: any
    /** 标题 */
    title?: string
    /** 标题 View */
    titleView?: Element
    /** title layout style */
    titleLayoutStyle?: any
    /** 左侧按钮  */
    leftButton?: Element
    /** 右侧按钮 */
    rightButton?: Element
    /** 状态栏是否为透明 */
    translucent?: boolean
    /** 是否隐藏 */
    hide?: boolean
}

const NavigationBar: React.FC<NavigationBarType> = (props) => {
    const getButtonElement = (ele: any) => {
        return <View>{ele ? ele : null}</View>
    }

    const titleView = props.titleView ? (
        props.titleView
    ) : (
        <Text
            //ellipsizeMode="head"
            numberOfLines={1}
            style={[styles.title, { color: props.color, fontSize: props.fontSize }]}>
            {props.title}
        </Text>
    )

    const content = props.hide ? null : (
        <View style={styles.navBar}>
            <View style={styles.leftBtnBox}>{getButtonElement(props.leftButton)}</View>
            <View style={[styles.navBarTitleContainer, props.titleLayoutStyle]}>{titleView}</View>
            <View style={styles.rightBtnBox}>{getButtonElement(props.rightButton)}</View>
        </View>
    )

    return (
        <View style={[styles.container]}>
            {props.statusBar.hidden ? (
                <View style={styles.statusBar}>
                    <StatusBar {...props.statusBar} />
                </View>
            ) : null}
            {content}
        </View>
    )
}

export { NavigationBar }
