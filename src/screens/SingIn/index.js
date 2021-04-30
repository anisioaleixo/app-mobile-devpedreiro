import React, { useState, useContext } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import AsyncStorage from '@react-native-community/async-storage'
import { UserContext } from '../../contexts/UserContext'

import styles from './styles'

import Logo from '../../assets/logo.svg'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'

import SignInput from '../../components/SignInput'

const SignIn = () => {
    const { dispatch: userDispatch } = useContext(UserContext)
    const navigation = useNavigation()

    const [emailField, setEmailField] = useState('')
    const [passwordField, setPasswordField] = useState('')

    const handleSignClick = () => { }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Logo width="100%" height="160" />
            <View style={styles.inputArea}>
                <SignInput
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    keyboardType="email-address"
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                />
                <SignInput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t => setPasswordField(t)}
                    password={true}
                />              

                <TouchableOpacity
                    style={styles.customButton}
                    onPress={handleSignClick}>
                    <Text style={styles.customButtonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.signMessageButton}
                onPress={handleMessageButtonClick}>
                <Text style={styles.signMessageButtonText}>Ainda não possui uma conta?</Text>
                <Text style={styles.signMessageButtonTextBold}>Cadastre-se!</Text>

            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default SignIn
