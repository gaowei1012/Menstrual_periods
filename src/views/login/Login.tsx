import React, { useState, useEffect } from 'react'
import styles from '../../styles/login'
import { SafeAreaView, View } from 'react-native'
import { NativeButtion } from '../../components/button'
import { NativeInput } from '../../components/input'
import NavigationUtil from '../../navigation/NavigationUtil'

const Login = () => {
    const [phone, setPhone] = useState(null)

    useEffect(() => {}, [])

    const handleChange = (val: any) => {
        setPhone(val)
    }

    const goToVerficationPage = () => {
        NavigationUtil.goPage({ phone }, 'VerifiPage')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loginContent}>
                <View style={styles.loginLogo} />
            </View>
            <View style={styles.loginInput}>
                <NativeInput
                    placeholder="请输入手机号"
                    onChangeText={handleChange}
                    lenght={11}
                    placeholderTextColor="#888888"
                />
                <NativeButtion top={30} content="登录" onPress={goToVerficationPage} />
            </View>
        </SafeAreaView>
    )
}

export default Login
