import React from 'react';
import { Pressable, Text, View } from 'react-native';
import ArrowLeft from '../../../assets/icon/account/LeftArrow';

import { useNavigation } from '@react-navigation/native';
import Fi_share from '../../../assets/icon/Fi_share';
import Download from '../../../assets/icon/download';

function Header({ title, border, color = "black", download }) {

  const navigation = useNavigation()

  const handleBackPress = () => {
    navigation.goBack();
  }
  return (
    <View className={`flex-row items-center relative py-3 pb-4 mb-4 border-b border-gray-200 border-[${border}]`}>
      <Pressable onPress={handleBackPress} className="absolute z-10 ">
        <ArrowLeft fill={color} />
      </Pressable>
      <Text className={`flex-1 text-center text-[18px] font-semibold text-${color}`}>{title}</Text>
      {
        download && (
          <Pressable onPress={handleBackPress} className="absolute z-10 right-0">
            <Fi_share fill={color} />
          </Pressable>
        )
      }
    </View>
  );
}


export default Header;