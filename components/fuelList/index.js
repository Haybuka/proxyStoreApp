import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import ArrowRight from '../../assets/icon/ArrowRight';
import { useNavigation } from '@react-navigation/native';

function FuelList({ product }) {

  const navigation = useNavigation()

  const { name, description, amt, image } = product

  const handleNavigate = () => {
    navigation.navigate("Filter", {
      ...product
    })
  }

  return (
    <TouchableOpacity onPress={handleNavigate} className="flex-row items-center my-5">
      <View className="mr-4">
        <Image
          source={image}
        />
      </View>
      <View className="flex items-center flex-row flex-1 ">
        <View className="flex-1">
          <Text className="text-lg">{name}</Text>
          <Text className="text-gray-700">{description}</Text>
        </View>
        <View>
          <Text className="text-[#0D5FFF] text-lg ">&#8358; {amt}/ltr</Text>
          <View className=" justify-end flex-row">
            <ArrowRight stroke='#0D5FFF' />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default FuelList;