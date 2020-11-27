import React, { useState, useEffect } from 'react'
import styles from '../../styles/verification'
import { SafeAreaView, Text } from 'react-native'

const VerifiPage = (props) => {
    const [phone, setPhone] = useState(null)

    useEffect(() => {
        const phone = props.navigation.state.params.phone
        setPhone(phone)
    }, [props.navigation.state.params.phone])

    return (
        <SafeAreaView style={styles.verification}>
            <Text>{phone}</Text>
        </SafeAreaView>
    )
}

export default VerifiPage
