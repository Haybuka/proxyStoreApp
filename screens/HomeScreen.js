import React from 'react';
import { View, StyleSheet, Text, ImageBackground, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Screen from '../components/Screen';
import { MaterialCommunityIcons } from '@expo/vector-icons/'



const Utils = [
  {
    name: "Transportation",
    label: "Transportation",
    image: "",
    id: 1
  },
  {
    name: "Gas",
    label: "Cooking Gas",
    image: "",
    id: 2
  },
  {
    name: "Fuel",
    label: "Fuel",
    image: "",
    id: 3
  },
  {
    name: "Lifestyle",
    label: "Lifestyle",
    image: "",
    id: 4
  },
  {
    name: "Electricity",
    label: "Electricity",
    image: "",
    id: 5
  },
  {
    name: "Airtime / Data",
    label: "Airtime / Data",
    image: "",
    id: 6
  },
  {
    name: "Water",
    label: "Water",
    image: "",
    id: 7
  }
]

function HomeScreen(props) {
  return (
    <Screen>
      <View className="flex-row items-center my-6">
        <View className="flex-row items-center flex-1">
          <ImageBackground source={require("../assets/tianah.jpeg")} className="h-10 w-10 overflow-hidden rounded-full bg-black">

          </ImageBackground>
          <Text className="ml-2 font-semibold">Hi, Olusegun 👋🏼</Text>
        </View>
        <View>
          <MaterialCommunityIcons name='bell' size={20} />
        </View>
      </View>
      <ScrollView>
        <View>
          <Text className="text-lg">Utilities</Text>
          <View className="flex-row flex-wrap my-3">
            {
              Utils.map((item, id) => (
                <TouchableOpacity key={id} className="h-[120px]  w-[120px] border border-gray-200 justify-center items-center">
                  <View className="h-14 w-14 my-2 bg-gray-200 rounded-full">
                  </View>
                  <Text className="my-2">{item.label}</Text>
                </TouchableOpacity>
              ))
            }
          </View>

        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default HomeScreen;