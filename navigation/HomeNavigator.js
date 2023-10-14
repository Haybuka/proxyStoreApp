import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from '../screens/HomeScreen';
import UtilityScreen from '../screens/UtilityScreen';





const Stack = createNativeStackNavigator()


function HomeNavigator(props) {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      // navigationBarHidden: true
    }} initialRouteName='Index'>
      <Stack.Screen name="Index" component={HomeScreen} />
      <Stack.Screen name="Utility" component={UtilityScreen} />
    </Stack.Navigator>
  );
}



export default HomeNavigator;