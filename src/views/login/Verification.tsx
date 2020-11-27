import React, { useState, useEffect, useRef } from 'react'
import styles from '../../styles/verification'
import { GoBack } from '../../utils/goback'
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import { VerifiInput } from '../../components/verification'
import { NativeButtion } from '../../components/button'
import { NavigationBar } from '../../navigation/TopNavigationBar'

const StatusBar = {
    backgroundColor: '#ffffff',
    barStyle: 'dark-content',
}

const VerifiPage = (props) => {
    const [phone, setPhone] = useState(null)
    const [count, setCount] = useState(0)
    // const [disabled, setDisable] = useState(false)

    const intervalRef = useRef(null)

    useEffect(() => {
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    useEffect(() => {
        if (count === 59) {
            intervalRef.current = setInterval(() => {
                setCount((preCount) => preCount - 1)
            }, 1000)
        } else if (count === 0) {
            clearInterval(intervalRef.current)
        }
    }, [count])

    useEffect(() => {
        const phone = props.navigation.state.params.phone
        setPhone(phone)
    }, [props.navigation.state.params.phone])

    const handleChangeCode = (val: string) => {
        console.log(val)
    }

    const handleSendCode = () => {
        setCount(59)
    }

    return (
        <SafeAreaView style={styles.verification}>
            <NavigationBar statusBar={StatusBar} leftButton={GoBack(props)} />
            <Text style={styles.verificationText}>输入验证码</Text>
            <View style={styles.verificationCode}>
                <VerifiInput onChangeText={handleChangeCode} />
                <VerifiInput />
                <VerifiInput />
                <VerifiInput />
            </View>
            <NativeButtion top={60} content={'确认'} />
            <TouchableOpacity style={styles.sendCode} activeOpacity={1} onPress={handleSendCode}>
                <View style={styles.timerBox}>
                    <Text style={styles.timerText}>{count ? `${count}秒后获取` : '获取验证码'}</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default VerifiPage
