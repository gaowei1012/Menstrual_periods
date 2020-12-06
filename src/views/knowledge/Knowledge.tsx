import React from 'react'
import styles from '../../styles/knowledge'
import { SafeAreaView, Image, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { NavigationBar } from '../../navigation/TopNavigationBar'
import ArrowSvg from '../../assets/svg/arrow_right.svg'
import NavigationUtil from '../../navigation/NavigationUtil'

const StatusBar = {
    backgroundColor: '#ffffff',
    barStyle: 'dark-content',
}

const source_url = 'https://iph.href.lu/320x94?fg=666666&bg=cccccc'

type listType = {}

const List = () => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => NavigationUtil.goPage({}, 'KnowledgeDetailPage')}
            style={styles.listBox}>
            <Image source={{ uri: source_url }} style={styles.imageBox} />
            <View style={styles.listBottom}>
                <Text>孕期知识孕期知识</Text>
                <ArrowSvg width={24} height={24} />
            </View>
        </TouchableOpacity>
    )
}

const KnowledgePage = () => {
    return (
        <SafeAreaView style={styles.KnowledgeContainer}>
            <NavigationBar statusBar={StatusBar} title="孕期知识" />
            <ScrollView>{List()}</ScrollView>
        </SafeAreaView>
    )
}

export default KnowledgePage
