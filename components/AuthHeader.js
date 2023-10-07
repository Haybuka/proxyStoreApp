import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import colors from '../utils/colors';
import { useNavigation } from '@react-navigation/native';

function AuthHeader({ title, description, handleBackPress }) {
  const navigation = useNavigation()
  return (
    <View className={`pb-6 h-56 justify-end  bg-[#03041E]`}>
      <ImageBackground imageStyle={{ resizeMode: 'cover', objectFit: 'fill' }} source={require("../assets/Auth_bg.png")} className={`h-full px-4  justify-end`}>

        <TouchableOpacity className="mb-8" onPress={navigation.goBack}>
          <ArrowLeftIcon size={25} color={'#fff'} />
        </TouchableOpacity>

        <View>
          <Text className="text-white text-2xl font-semibold">{title}</Text>
          <Text className={`my-2 text-[#CBCDFF]`}>{description}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default AuthHeader;