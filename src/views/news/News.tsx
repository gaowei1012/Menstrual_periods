import React from 'react'
import NavigationUtil from '../../navigation/NavigationUtil'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

const News = () => {
    const goLogin = () => {
        NavigationUtil.goPage({}, 'LoginPage')
    }
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={goLogin}>
                <Text>news</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default News
