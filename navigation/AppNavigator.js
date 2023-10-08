import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, useWindowDimensions } from 'react-native';
import BottomTabButton from './BottomTabButton';
import { useIsFocused, getFocusedRouteNameFromRoute, useNavigationState, useNavigation } from '@react-navigation/native';

import AuthNavigator from './AuthNavigator';
import HomeScreen from '../screens/HomeScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import AccountScreen from '../screens/AccountScreen';
import navScreenOptions from '../utils/navScreenOptions';
import { useState } from 'react';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  const [currentScreen, setCurrentScreen] = useState("Home")
  const navigation = useNavigation()
  const handleNavigation = (name) => {
    navigation.navigate(name)
    setCurrentScreen(name)
  }
  return (
    <Tab.Navigator initialRouteName='Account'

      screenOptions={
        {
          ...navScreenOptions,
          tabBarItemStyle: {
            justifyContent: "center",
            backgroundColor: "red",
            alignSelf: "center"
          },
          // navigationBarHidden: true

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
        component={HomeScreen}
        options={({ navigation, route }) => ({

          tabBarButton: (props) => {
            const focused = (route.name === currentScreen)

            return (
              <BottomTabButton focused={focused} icon={'home'} onPress={() => handleNavigation(route.name)} />
            )
          },
          tabBarActiveBackgroundColor: "red"
        })}


      />

      <Tab.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={({ navigation, route }) => ({
          tabBarButton: (props) => {
            const focused = (route.name === currentScreen)
            return (
              <BottomTabButton focused={focused} icon={'transaction'} onPress={() => handleNavigation(route.name)} />
            )
          }
        })}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
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

