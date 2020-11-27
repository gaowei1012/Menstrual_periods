/* eslint-disable prettier/prettier */
import React from 'react'
import styles from '../styles/goback'
import { View, TouchableOpacity } from 'react-native'
import NavigationUtil from '../navigation/NavigationUtil'

// svg
import Navigate from '../assets/svg/navigate.svg';

function GoBack(props) {
    return (
        <View style={styles.leftWrapContainer}>
            <TouchableOpacity activeOpacity={1} onPress={() => NavigationUtil.goBack(props.navigation)}>
                <View style={styles.leftGoBackIcon}>
                    <Navigate width={20} height={20} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export { GoBack }
