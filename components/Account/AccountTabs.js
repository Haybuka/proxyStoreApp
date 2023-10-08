import React from 'react';
import { Pressable, Text, View } from 'react-native';
import ArrowRight from '../../assets/icon/ArrowRight';
import accountIcons from '../../utils/accountIcons';
import { useNavigation } from '@react-navigation/native';

function AccountTabs({ title, options }) {
  const navigation = useNavigation()
  const handlePress = (option) => {

    navigation.navigate(option.path)
  }
  return (
    <View>
      <Text className="text-[#728BA5] text-[14px] mb-2">{title}</Text>
      <View className="border border-gray-100 rounded-md px-3 mb-8 py-4">
        {
          options.map((option) => (
            <Pressable onPress={() => handlePress(option)} key={option.id} className="py-2 my-1 flex-row items-center">
              <View className="flex-row flex-1 items-center">
                {accountIcons(option.icon)}
                <Text className="text-lg ml-2 capitalize">{option.name}</Text>
              </View>
              <ArrowRight />
            </Pressable>
          ))
        }
      </View>
    </View>
  );
}

export default AccountTabs;