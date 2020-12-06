import React from 'react'
import styles from '../../styles/personal'
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import NavigationUtil from '../../navigation/NavigationUtil'
// import { Http } from '../../expand/axios'

// svg
import SettingSvg from '../../assets/svg/setting.svg'
import NoteSvg from '../../assets/personal/notelist.svg'
import HallmarkSvg from '../../assets/personal/hallmark.svg'
import ShareSvg from '../../assets/personal/share.svg'
import QuestionSvg from '../../assets/personal/question.svg'

import List from './components/List'

// const test_url = '/test'

const header = () => (
    <View style={styles.headerBox}>
        <TouchableOpacity
            onPress={() => NavigationUtil.goPage({}, 'SettingPage')}
            activeOpacity={1}
            style={styles.headerSetting}>
            <SettingSvg width={18} height={18} />
        </TouchableOpacity>
    </View>
)

const content = () => {
    const onLoginPage = () => {
        NavigationUtil.goPage({}, 'LoginPage')
    }
    return (
        <View style={styles.contentBox}>
            <TouchableOpacity onPress={onLoginPage}>
                <View style={styles.avatarBox}></View>
            </TouchableOpacity>
            <Text style={styles.avatarName}>name</Text>
            <View style={styles.listView}>
                <List
                    NoteSvg={<NoteSvg width={24} height={24} />}
                    onPress={() => NavigationUtil.goPage({}, 'RecordingPage')}
                    title="姨妈记录"
                />
                <List
                    NoteSvg={<HallmarkSvg width={24} height={24} />}
                    onPress={() => NavigationUtil.goPage({}, 'RankingPage')}
                    title="打卡排行"
                />
                <List
                    NoteSvg={<ShareSvg width={24} height={24} />}
                    onPress={() => NavigationUtil.goPage({}, 'SharePage')}
                    title="知识分享"
                />
                <List
                    NoteSvg={<QuestionSvg width={24} height={24} />}
                    onPress={() => NavigationUtil.goPage({}, 'HelpCenterPage')}
                    title="帮助中心"
                />
            </View>
        </View>
    )
}

const Personal = () => {
    return (
        <SafeAreaView style={styles.personal}>
            {header()}
            {content()}
        </SafeAreaView>
    )
}

export default Personal
