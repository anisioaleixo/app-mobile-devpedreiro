import React, { useEffect } from 'react'
import { ActivityIndicator, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles'
import Logo from '../../assets/logo.svg'


const Preload = () => {

    const navigation = useNavigation()

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token')
            if (token) {
                //Validar token
            } else {
                navigation.navigate('SignIn')
            }
        }
        checkToken()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Logo width="100%" height="160" />
            <ActivityIndicator
                size="large"
                color='#FFFFFF'
                style={styles.loading} />
        </SafeAreaView>
    )
}

export default Preload
