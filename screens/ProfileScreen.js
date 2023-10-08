import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Screen from '../components/Screen';
import ArrowRight from '../assets/icon/ArrowRight';
import Camera from '../assets/icon/account/Camera';
import { useNavigation } from '@react-navigation/native';
import ProxyController from '../components/form/ProxyController';
import ProxyButton from '../components/ProxyButton';
function ProfileScreen(props) {
  const navigation = useNavigation()
  const handleBackPress = () => {
    navigation.goBack();
  }
  return (
    <Screen>
      <View className="flex-row my-3 relative">
        <Pressable onPress={handleBackPress} className="absolute z-10 top-0 left-0">
          <ArrowRight />
        </Pressable>
        <Text className="flex-1 text-center font-bold  text-xl">Profile</Text>
      </View>
      <View className="items-center my-6">
        <View className="relative">
          <Image resizeMode='cover' className="w-24 h-24 overflow-hidden rounded-full" source={require("../assets/tianah.jpeg")} />
          <View className="absolute bottom-0 right-0 ">
            <Camera />
          </View>
        </View>

      </View>
      <View className="px-2">
        <View className="py-6">

          <ProxyController
            title="Current password"
            placeholder={'password'}
            autoCapitalize="none"
            autoCorrect={false}
            icon={'eye'}
            name={'current_password'}
            secureTextEntry
            control={control}
          />
          <ProxyController
            title="Password"
            placeholder={'password'}
            autoCapitalize="none"
            autoCorrect={false}
            icon={'eye'}
            name={'password'}
            secureTextEntry
            control={control}
          />
          <ProxyController
            title="Re-enter Password"
            placeholder={'password'}
            autoCapitalize="none"
            autoCorrect={false}
            icon={'eye'}
            name={'password2'}
            secureTextEntry
            control={control}
          />
        </View>

        <ProxyButton title={"Save"} handlePress={handleSubmit(handlePasswordChange)} />

      </View>
    </Screen>
  );
}


export default ProfileScreen;