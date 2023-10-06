import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import WelcomeScreen from '../screens/WelcomeScreen';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator()


function AuthNavigator(props) {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} initialRouteName='Register'>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={SignupScreen} />
    </Stack.Navigator>
  );
}



export default AuthNavigator;