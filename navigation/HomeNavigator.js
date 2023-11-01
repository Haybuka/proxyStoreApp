import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from '../screens/HomeScreen';
import UtilityScreen from '../screens/UtilityScreen';
import PaymentInfoScreen from '../screens/PaymentInfoScreen';
import LifestyleScreen from '../screens/LifestyleScreen';
import ServiceSelectScreen from '../screens/ServiceSelectScreen';
import CalenderDisplayScreen from '../screens/CalenderDisplayScreen';
import ServiceLocationScreen from '../screens/ServiceLocationScreen';
import ReceiptScreen from '../screens/ReceiptScreen';





const Stack = createNativeStackNavigator()


function HomeNavigator(props) {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      // navigationBarHidden: true
    }} initialRouteName='Index'>
      <Stack.Screen name="Index" component={HomeScreen} />
      <Stack.Screen
        name="Utility"
        component={UtilityScreen}
        options={({ route }) => ({ title: route.params.name })} />
      <Stack.Screen
        name="Payment"
        component={PaymentInfoScreen}
      // options={({ route }) => ({ title: route.params.name })} 
      />
      <Stack.Screen
        name="Lifestyle"
        component={LifestyleScreen}
      />
      <Stack.Screen
        name="ServiceSelect"
        component={ServiceSelectScreen}
      />
      <Stack.Screen
        name="Calender"
        component={CalenderDisplayScreen}
      />
      <Stack.Screen
        name="Location"
        component={ServiceLocationScreen}
      />
      <Stack.Screen
        name="Receipt"
        component={ReceiptScreen}
        options={{
          headerBackTitleVisible: true,
          headerShown: false,
          // headerTintColor: 'white'
        }}
      />
    </Stack.Navigator>
  );
}



export default HomeNavigator;