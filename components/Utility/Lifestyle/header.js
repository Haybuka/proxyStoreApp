import React from 'react';
import { Pressable, Text, View } from 'react-native';
import ArrowLeft from '../../../assets/icon/account/LeftArrow';

import { useNavigation } from '@react-navigation/native';

function Header({ title }) {

  const navigation = useNavigation()

  const handleBackPress = () => {
    navigation.goBack();
  }
  return (
    <View className="flex-row items-center relative py-3 pb-4 mb-4 border-b border-gray-100">
      <Pressable onPress={handleBackPress} className="absolute z-10 ">
        <ArrowLeft />
      </Pressable>
      <Text className="flex-1 text-center text-[18px] font-semibold text-black">{title}</Text>
    </View>
  );
}


export default Header;