import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, useWindowDimensions } from 'react-native';
import BottomTabButton from './BottomTabButton';
import { useIsFocused, getFocusedRouteNameFromRoute, useNavigationState } from '@react-navigation/native';

import AuthNavigator from './AuthNavigator';
import HomeScreen from '../screens/HomeScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import AccountScreen from '../screens/AccountScreen';
import navScreenOptions from '../utils/navScreenOptions';

const Tab = createBottomTabNavigator();

function AppNavigator() {

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
            return (
              <BottomTabButton focused={false} icon={'home'} onPress={() => navigation.navigate("Home")} />
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
            return (
              <BottomTabButton icon={'transaction'} onPress={() => navigation.navigate("Transactions")} />
            )
          }
        })}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={({ navigation, route }) => ({
          tabBarButton: (props) => {
            return (
              <BottomTabButton icon={'profile'} onPress={() => navigation.navigate("Account")} />
            )
          }
        })}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator

