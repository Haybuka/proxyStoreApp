import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, useWindowDimensions } from 'react-native';
import BottomTabButton from './BottomTabButton';
import { useIsFocused, getFocusedRouteNameFromRoute, useNavigationState, useNavigation } from '@react-navigation/native';

import AuthNavigator from './AuthNavigator';
import HomeScreen from '../screens/HomeScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import navScreenOptions from '../utils/navScreenOptions';
import { useState } from 'react';
import AccountNavigator from './AccountNavigator';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();
const screens = ["Home", "Account", "Transactions"]
function AppNavigator() {
  const [currentScreen, setCurrentScreen] = useState("Home")
  const [focusedScreen, setFocusedScreen] = useState(undefined)
  const navigation = useNavigation()
  const handleNavigation = (name) => {
    navigation.navigate(name)
    setCurrentScreen(name)
  }
  return (
    <Tab.Navigator initialRouteName='Home'
      screenListeners={({ route }) => {

        setFocusedScreen(route?.state?.index)
      }}
      screenOptions={
        {
          ...navScreenOptions,
          tabBarItemStyle: {
            justifyContent: "center",
            alignSelf: "center",
            display: "none",
            backgroundColor: 'red'
          },
          tabBarStyle: {
            ...navScreenOptions.tabBarStyle,
            display: focusedScreen > 0 ? 'none' : 'flex',
          }
        }
      }

    >
      <Tab.Screen name="Auth" component={AuthNavigator} options={{
        headerShown: false,
        tabBarItemStyle: {
          display: 'none',
        },
        tabBarStyle: {
          display: "none"
        }

      }} />
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={({ navigation, route }) => ({

          tabBarButton: (props) => {
            const focused = (route.name === currentScreen)
            return (
              <BottomTabButton focused={focused} icon={'home'} onPress={() => handleNavigation(route.name)} />
            )
          }
        })}


      />

      <Tab.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={({ navigation, route }) => ({
          tabBarButton: (props) => {
            const focused = (route.name === currentScreen)
            return (
              <BottomTabButton mh={25} focused={focused} icon={'transaction'} onPress={() => handleNavigation(route.name)} />
            )
          }
        })}
      />

      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={({ navigation, route }) => ({
          tabBarButton: (props) => {
            const focused = (route.name === currentScreen)


            return (
              <BottomTabButton focused={focused} icon={'profile'} onPress={() => handleNavigation(route.name)} />
            )
          }
        })}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator

