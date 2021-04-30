import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default ({ IconSvg, placeholder, value, keyboardType='default', onChangeText, password }) => {
    return (
        <View style={styles.imputArea}>
            <IconSvg width="24" height="24" fill="#268596" />
            <TextInput
                style={styles.InputText}
                placeholder={placeholder}
                placeholderTextColor="#268596"
                value={value}
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    imputArea: {
        width: '100%',
        height: 60,
        backgroundColor: '#83D6E3',
        flexDirection: 'row',
        borderRadius: 30,
        paddingLeft: 15,
        alignItems: 'center',
        marginBottom: 15,
    },
    InputText: {
        flex: 1,
        fontSize: 18,
        color: '#268596',
        marginLeft: 10,
    }
})
