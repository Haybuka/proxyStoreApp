import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Text } from 'react-native';

function AccountHeader({ }) {
  return (
    <View className={`pb-6 h-[148px] relative justify-center items-center  bg-[#03041E]`}>
      <ImageBackground imageStyle={{ resizeMode: 'cover', objectFit: 'fill' }} source={require("../../assets/Auth_bg.png")} className={`h-full px-4  justify-end`}>

      </ImageBackground>
      <View className="absolute -bottom-24 items-center">
        <View className="w-28 h-28 overflow-hidden bg-gray-200 rounded-full border-4 border-white">
          <Image resizeMode='cover' className="w-full h-full" source={require("../../assets/tianah.jpeg")} />
        </View>
        <View className="my-3">
          <Text className="text-xl font-semibold capitalize"> Ojo, Bunmi</Text>
        </View>
      </View>
    </View>
  );
}


export default AccountHeader;