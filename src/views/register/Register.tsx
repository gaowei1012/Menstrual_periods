import React, { useState } from 'react'
import styles from '../../styles/register'
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { NativeButtion } from '../../components/button'
import { NativeInput } from '../../components/input'
import NavigationUtil from '../../navigation/NavigationUtil'

const Register = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    /**
     * 获取用户名
     * @param val 用户名 value
     */
    const get_username_value = (val: string) => {
        setUsername(val)
    }
    /**
     * 获取密码
     * @param val 密码value
     */
    const get_password_value = (val: string) => {
        setPassword(val)
    }
    /**
     * 已注册，跳转到登录
     */
    const go_register_to_login = () => {
        NavigationUtil.goPage({}, 'LoginPage')
    }
    const post_register = () => {
        const data = {
            username,
            password,
        }
        console.log('register', data)
    }
    return (
        <SafeAreaView style={styles.registerContainer}>
            <View style={styles.registerContent}>
                <Text style={styles.title}>用户注册</Text>
            </View>
            <View style={styles.registerInput}>
                <NativeInput
                    placeholder="请输入用户名"
                    onChangeText={get_username_value}
                    lenght={11}
                    placeholderTextColor="#888888"
                />
                <NativeInput
                    placeholder="请输入密码"
                    onChangeText={get_password_value}
                    lenght={11}
                    placeholderTextColor="#888888"
                />
                <NativeButtion top={30} content="注册" onPress={post_register} />
                <TouchableOpacity onPress={go_register_to_login} activeOpacity={1} style={styles.fot}>
                    <Text>已注册？登录</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Register
