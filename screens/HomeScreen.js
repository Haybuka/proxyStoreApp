import React from 'react';
import { View, StyleSheet, Text, ImageBackground, ScrollView } from 'react-native';
import Screen from '../components/Screen';
import { MaterialCommunityIcons } from '@expo/vector-icons/'

import UtilityCard from '../components/Home/UtilityCard';




const Utils = [
  {
    name: "Transportation",
    label: "Transportation",
    icon: "transport",
    id: 1
  },
  {
    name: "Gas",
    label: "Cooking Gas",
    icon: "gas",
    id: 2
  },
  {
    name: "Fuel",
    label: "Fuel",
    icon: "fuel",
    id: 3
  },
  {
    name: "Lifestyle",
    label: "Lifestyle",
    icon: "lifestyle",
    id: 4
  },
  {
    name: "Electricity",
    label: "Electricity",
    icon: "electricity",
    id: 5
  },
  {
    name: "Airtime",
    label: "Airtime / Data",
    icon: "data",
    id: 6
  },
  {
    name: "Tithes",
    label: "Tithes & Offering ",
    icon: "church",
    id: 8
  },
  {
    name: "Water",
    label: "Water",
    icon: "water",
    id: 7
  },
  {
    name: "Codevolution",
    label: "Codevolution",
    icon: "Codevolution",
    id: 8
  },
]

function HomeScreen() {
  return (
    <Screen>
      <ScrollView>
        <View className="flex-row items-center my-6">
          <View className="flex-row items-center flex-1">
            <ImageBackground source={require("../assets/tianah.jpeg")} className="h-10 w-10 overflow-hidden rounded-full bg-black">

            </ImageBackground>
            <View>
              <Text className="ml-2 font-semibold">Hi Tianah 👋🏼</Text>
            </View>
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
                  <UtilityCard key={id} item={item} />
                ))
              }
            </View>


          </View>
        </ScrollView>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default HomeScreen;