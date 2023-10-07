import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthNavigator from './AuthNavigator';
import HomeScreen from '../screens/HomeScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Text, View, useWindowDimensions } from 'react-native';
import TransactionsScreen from '../screens/TransactionsScreen';
import AccountScreen from '../screens/AccountScreen';
import BottomTabButton from './BottomTabButton';
const Tab = createBottomTabNavigator();

function TabNavigator() {

  const dimension = useWindowDimensions()
  return (
    <Tab.Navigator initialRouteName='Root'

      screenOptions={
        {
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'white',
          tabBarActiveBackgroundColor: "#0D5FFF",
          tabBarStyle: {
            width: 250,
            height: 70,
            borderRadius: 150,
            alignSelf: 'center',
            alignItems: "center",
            backgroundColor: '#03041E',
            borderWidth: 1,
            flexDirection: "row",
            borderColor: "white",
            marginBottom: 10,
            overflow: "hidden",
            // elevation: 2
          },
          headerShown: false
        }}

    >
      <Tab.Screen name="Home" component={AuthNavigator} options={{
        headerShown: false,
        tabBarItemStyle: {
          display: 'none'
        }

      }} />
      <Tab.Screen
        name="Root"
        component={HomeScreen}
        options={({ navigation, route }) => ({

          tabBarButton: (props) => {

            return (
              <BottomTabButton icon={'cart'} onPress={() => navigation.navigate("Root")} />
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
            console.log(route)
            return (
              <BottomTabButton icon={'receipt'} onPress={() => navigation.navigate("Transactions")} />
            )
          }
        })}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={({ navigation, route }) => ({
          tabBarButton: (props) => {
            console.log({ props })
            return (
              <BottomTabButton icon={'account'} onPress={() => navigation.navigate("Account")} />
            )
          }
        })}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator

