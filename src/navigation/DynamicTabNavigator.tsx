import { connect } from 'react-redux'
import React, { Component } from 'react'
import { View } from 'react-native'
import { createAppContainer, BottomTabBar, createBottomTabNavigator } from 'react-navigation'
import styles from '../styles/dynamic'

import News from '../views/news'
import Knowledge from '../views/knowledge'
import Personal from '../views/personal'

// svg
import HomeSvg from '../assets/tab/language.svg'
import SelHomeSvg from '../assets/tab/ac-language.svg'
import FaMapSvg from '../assets/tab/fa-map.svg'
import SelFaMapSvg from '../assets/tab/ac-fa-map.svg'
import FaLemon from '../assets/tab/fa-lemon.svg'
import SelFaLemon from '../assets/tab/ac-fa-lemon.svg'

type TabBarItemType = {
    props?: any
}

class DynamicTabNavigator extends Component {
    constructor(props: any) {
        super(props)
    }
    TABS = {
        Index: {
            screen: News,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({ tintColor, focused }) => {
                    return (
                        <TabBarItem
                            tintColor={tintColor}
                            focused={focused}
                            selectedSvg={<SelHomeSvg />}
                            normalSvg={<HomeSvg />}
                        />
                    )
                },
            },
        },
        Knowledge: {
            screen: Knowledge,
            navigationOptions: {
                tabBarLabel: '我的土地',
                tabBarIcon: ({ tintColor, focused }) => {
                    return (
                        <TabBarItem
                            tintColor={tintColor}
                            focused={focused}
                            selectedSvg={<SelFaMapSvg />}
                            normalSvg={<FaMapSvg />}
                        />
                    )
                },
            },
        },
        Personal: {
            screen: Personal,
            navigationOptions: {
                tabBarLabel: '农作物改良',
                tabBarIcon: ({ tintColor, focused }) => {
                    return (
                        <TabBarItem
                            tintColor={tintColor}
                            focused={focused}
                            selectedSvg={<SelFaLemon />}
                            normalSvg={<FaLemon />}
                            isShowMessage={true}
                        />
                    )
                },
            },
        },
    }

    _tabNavgator() {
        /// 如果有当前Tabs
        if (this.Tabs) {
            return this.Tabs
        }
        const { Index, Knowledge, Personal } = this.TABS
        const tabs = { Index, Knowledge, Personal }
        // IndexPage.navigationOptions.tabBarLabel = '首页';
        return (this.Tabs = createBottomTabNavigator(tabs, {
            tabBarComponent: (props) => {
                return <TabBarComponent {...props} theme={this.props.theme.theme} />
            },
        }))
    }

    render() {
        // 保存navigation为了后面调用
        //console.log(this.props.navigation);
        const Tab = createAppContainer(this._tabNavgator())
        return <Tab />
    }
}

const TabBarComponent = (props: any) => {
    return <BottomTabBar {...props} activeTintColor={props.theme} />
}

class TabBarItem extends React.Component {
    constructor(props: any) {
        super(props)
    }
    render() {
        return <View style={styles.tabBox}>{this.props.focused ? this.props.selectedSvg : this.props.normalSvg}</View>
    }
}
export default connect(({ theme }) => ({ theme }))(DynamicTabNavigator)
