
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#63C2D1',
    },
    inputArea: {
        width: '100%',
        padding: 40,
    },
    customButton: {
        height: 60,
        backgroundColor: '#268596',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButtonText: {
        fontSize: 18,
        color: '#FFF',
    },
    signMessageButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    signMessageButtonText: {
        fontSize: 17,
        color: '#268596',
    },
    signMessageButtonTextBold: {
        fontSize: 17,
        color: '#268596',
        fontWeight: 'bold',
        marginLeft: 5,
    }
})

export default styles
