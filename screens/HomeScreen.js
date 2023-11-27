import React from 'react';
import { View, StyleSheet, Text, ImageBackground, ScrollView } from 'react-native';
import Screen from '../components/Screen';
import { MaterialCommunityIcons } from '@expo/vector-icons/'

import UtilityCard from '../components/Home/UtilityCard';
import Products from '../utils/productList';






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
            <MaterialCommunityIcons name='bell-outline' size={20} />
          </View>
        </View>
        <ScrollView>
          <View>
            <Text className="text-lg">Utilities</Text>
            <View className="flex-row flex-wrap my-3 ">
              {
                Products.map((item, id) => (
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