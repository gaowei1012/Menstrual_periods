import React from 'react'
import { GoBack } from '../../utils/goback'
import { SafeAreaView, Text } from 'react-native'
import { NavigationBar } from '../../navigation/TopNavigationBar'

const StatusBar = {
    backgroundColor: '#ffffff',
    barStyle: 'dark-content',
}

const HelpCenterPage = (props) => {
    return (
        <SafeAreaView>
            <NavigationBar statusBar={StatusBar} leftButton={GoBack(props)} title="帮助中心" />
            <Text>help center</Text>
        </SafeAreaView>
    )
}

export default HelpCenterPage
