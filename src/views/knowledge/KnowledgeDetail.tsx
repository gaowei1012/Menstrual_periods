import React from 'react'
import { GoBack } from '../../utils/goback'
import styles from '../../styles/knowledgedetail'
import { SafeAreaView, Text } from 'react-native'
import { NavigationBar } from '../../navigation/TopNavigationBar'

const StatusBar = {
    backgroundColor: '#ffffff',
    barStyle: 'dark-content',
}

const KnowledgeDetail = (props) => {
    return (
        <SafeAreaView style={styles.knowledgeContainer}>
            <NavigationBar statusBar={StatusBar} leftButton={GoBack(props)} title="详情" />
            <Text>Knowledge Detail</Text>
        </SafeAreaView>
    )
}

export default KnowledgeDetail
