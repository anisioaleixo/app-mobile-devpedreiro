import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Preload from '../screens/Preload';
import SignIn from '../screens/SingIn';
import SignUp from '../screens/SingUp';

const Stack = createStackNavigator();

const MainStack = () => (
    <Stack.Navigator 
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
    </Stack.Navigator>
);

export default MainStack;
