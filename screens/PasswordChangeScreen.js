import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import Screen from '../components/Screen';
import { useNavigation } from '@react-navigation/native';
import ArrowLeft from '../assets/icon/account/LeftArrow';

import { useForm } from "react-hook-form"


import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ProxyController from '../components/form/ProxyController';
import ProxyButton from '../components/ProxyButton';


const zodSchema = z.object({
  current_password: z.string("Password is required").min(4, "Password must be greater than 4"),
  password: z.string("Password is required").min(4, "Password must be greater than 4"),
  password2: z.string("Password is required").min(4, "Password must be greater than 4"),

}).refine(
  (data) => data.password === data.password2, {
  message: 'Passwords dont match',
  path: ["password2"]
}
)

function PasswordChangeScreen(props) {

  const navigation = useNavigation()

  const {
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      current_password: "",
      password: "",
      password2: "",
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
          <ArrowLeft />

        </Pressable>
        <Text className="flex-1 text-center font-bold  text-xl">Change password</Text>
      </View>
      <ScrollView>
        <View className="px-2 mb-4">
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
              title="New password"
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
      </ScrollView>
    </Screen>
  );
}



export default PasswordChangeScreen;