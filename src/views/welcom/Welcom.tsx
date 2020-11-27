/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import NavigationUtil from '../../navigation/NavigationUtil'

const WelcomePage = (props: any) => {
    useEffect(() => {
        setTimeout(() => {
            NavigationUtil.restToHomePage({
                navigation: props.navigation,
            })
        }, 2000)
    }, [])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>welcome to native page</Text>
        </View>
    )
}

export default WelcomePage
