import React from 'react'
import { GoBack } from '../../utils/goback'
import { SafeAreaView, Text } from 'react-native'
import { NavigationBar } from '../../navigation/TopNavigationBar'

const StatusBar = {
    backgroundColor: '#ffffff',
    barStyle: 'dark-content',
}

const RecordingPage = (props) => {
    return (
        <SafeAreaView>
            <NavigationBar statusBar={StatusBar} leftButton={GoBack(props)} title="姨妈记录" />
            <Text>RecordingPage</Text>
        </SafeAreaView>
    )
}

export default RecordingPage
