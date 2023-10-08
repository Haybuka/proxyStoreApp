import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Screen from '../components/Screen';
import ArrowRight from '../assets/icon/ArrowRight';
import Camera from '../assets/icon/account/Camera';
import { useNavigation } from '@react-navigation/native';

import { useForm } from "react-hook-form"


import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ProxyController from '../components/form/ProxyController';
import ProxyButton from '../components/ProxyButton';

const zodSchema = z.object({
  email: z.string("Email is required").email('Email format is not valid'),
  username: z.string().min(2, "Name is too short"),
});

function ProfileScreen(props) {
  const navigation = useNavigation()

  const {
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      username: ""
    },
    resolver: zodResolver(zodSchema)
  })
  const handlePasswordChange = (data) => {
    console.log("saved", data)
  }
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
            title="Full Name"
            placeholder={'John Doe'}
            autoCapitalize="none"
            autoCorrect={false}
            name={'username'}
            secureTextEntry
            control={control}
          />
          <ProxyController
            title="Email Address"
            placeholder={'Johndoe@email.com'}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            name={'email'}
            control={control}
          />
        </View>

        <ProxyButton title={"Save"} handlePress={handleSubmit(handlePasswordChange)} />

      </View>
    </Screen>
  );
}


export default ProfileScreen;