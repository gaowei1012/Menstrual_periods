import React from 'react'
import styles from '../../styles/personal'
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
// import { Http } from '../../expand/axios'

// const test_url = '/test'

const header = () => (
    <View style={styles.headerBox}>
        <TouchableOpacity>
            <Text style={styles.headerSetting}>设置</Text>
        </TouchableOpacity>
    </View>
)

const content = () => (
    <View style={styles.contentBox}>
        <View style={styles.avatarBox}></View>
        <Text style={styles.avatarName}>name</Text>
    </View>
)

const Personal = () => {
    return (
        <SafeAreaView style={styles.personal}>
            {header()}
            {content()}
        </SafeAreaView>
    )
}

export default Personal
