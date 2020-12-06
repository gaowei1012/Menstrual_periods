import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import styles from '../../styles/setting'

type settingType = {}

const SettingPage: React.FC<settingType> = () => {
    return (
        <SafeAreaView style={styles.settingContianer}>
            <Text>setting</Text>
        </SafeAreaView>
    )
}

export default SettingPage
