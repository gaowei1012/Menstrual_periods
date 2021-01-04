import React, { useState, useEffect } from 'react'
import styles from '../../styles/login'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import { NativeButtion } from '../../components/button'
import { NativeInput } from '../../components/input'
import NavigationUtil from '../../navigation/NavigationUtil'

const Login = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    useEffect(() => {}, [])

    /**
     * 获取用户名
     * @param val 用户名 value
     */
    const get_login_username_value = (val: string) => {
        setUsername(val)
    }

    /**
     * 获取密码
     * @param val 密码 value
     */
    const get_login_password_value = (val: string) => {
        setPassword(val)
    }

    /**
     *  提交用户登录
     *  */
    const post_login = () => {
        const data = {
            username,
            password,
        }
        console.log('login', data)
    }

    /**
     * 没有账号，跳转注册
     */
    const go_login_to_register = () => {
        NavigationUtil.goPage({}, 'RegisterPage')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loginContent}>
                <Text style={styles.title}>用户登录</Text>
            </View>
            <View style={styles.loginInput}>
                <NativeInput
                    placeholder="请输入用户名"
                    onChangeText={get_login_username_value}
                    lenght={11}
                    placeholderTextColor="#888888"
                />
                <NativeInput
                    placeholder="请输入密码"
                    onChangeText={get_login_password_value}
                    lenght={11}
                    placeholderTextColor="#888888"
                />
                <NativeButtion top={30} content="登录" onPress={post_login} />
                <TouchableOpacity onPress={go_login_to_register} activeOpacity={1} style={styles.fot}>
                    <Text>没有账号？注册</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Login
