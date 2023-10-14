import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';



import AccountScreen from '../screens/AccountScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PasswordChangeScreen from '../screens/PasswordChangeScreen';

const Stack = createNativeStackNavigator()


function AccountNavigator(props) {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      // navigationBarHidden: true
    }} initialRouteName='Overview'>
      <Stack.Screen name="Overview" component={AccountScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Password" component={PasswordChangeScreen} />
    </Stack.Navigator>
  );
}



export default AccountNavigator;