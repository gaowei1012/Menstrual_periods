import React from 'react'
import { GoBack } from '../../utils/goback'
import { View, Text, SafeAreaView } from 'react-native'
import { NavigationBar } from '../../navigation/TopNavigationBar'

const StatusBar = {
    backgroundColor: '#ffffff',
    barStyle: 'dark-content',
}

const SharePage = (props) => {
    return (
        <SafeAreaView>
            <NavigationBar statusBar={StatusBar} leftButton={GoBack(props)} title="知识分享" />
            <View>
                <Text>分享记录</Text>
            </View>
        </SafeAreaView>
    )
}

export default SharePage
