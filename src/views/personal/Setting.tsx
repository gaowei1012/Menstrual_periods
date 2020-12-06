import React from 'react'
import { GoBack } from '../../utils/goback'
import { SafeAreaView, Text } from 'react-native'
import { NavigationBar } from '../../navigation/TopNavigationBar'
import styles from '../../styles/setting'

type settingType = {}

const StatusBar = {
    backgroundColor: '#ffffff',
    barStyle: 'dark-content',
}

const SettingPage: React.FC<settingType> = (props) => {
    return (
        <SafeAreaView style={styles.settingContianer}>
            <NavigationBar statusBar={StatusBar} leftButton={GoBack(props)} title="设置" />
            <Text>setting</Text>
        </SafeAreaView>
    )
}

export default SettingPage
