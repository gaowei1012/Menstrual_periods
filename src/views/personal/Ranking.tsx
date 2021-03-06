import React from 'react'
import { GoBack } from '../../utils/goback'
import { SafeAreaView, Text } from 'react-native'
import { NavigationBar } from '../../navigation/TopNavigationBar'

const StatusBar = {
    backgroundColor: '#ffffff',
    barStyle: 'dark-content',
}

const RankingPage = (props) => {
    return (
        <SafeAreaView>
            <NavigationBar statusBar={StatusBar} leftButton={GoBack(props)} title="打卡排行" />
            <Text>ranking</Text>
        </SafeAreaView>
    )
}

export default RankingPage
