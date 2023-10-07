import React from 'react';
import { View, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useForm } from "react-hook-form"

import AuthFooter from '../components/AuthFooter';
import { useNavigation } from '@react-navigation/native';
import ProxyController from '../components/form/ProxyController';
import ProxyButton from '../components/ProxyButton';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const zodSchema = z.object({
  email: z
    .string("Email is required")
    .email('Email format is not valid'),
});

function ResetScreen({ }) {
  const {
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: ""
    },
    resolver: zodResolver(zodSchema)
  })
  const navigation = useNavigation()

  const footerItems = {
    btnText: "Reset",
  }

  const handleReset = (data) => {
    console.log("logging in", data)
  }

  return (
    <View>
      <View className={`pb-6 h-24 justify-end  bg-[#03041E]`}>
        <ImageBackground resizeMode='cover' source={require("../assets/Auth_bg.png")} className={`h-full px-4  bg-repeat  justify-end`}>
          <TouchableOpacity onPress={navigation.goBack}>
            <ArrowLeftIcon size={25} color={'#fff'} />
          </TouchableOpacity>

        </ImageBackground>
      </View>

      <View className="px-2">

        <View className="py-6">
          <View className="my-3">
            <Text className="text-black text-2xl font-semibold">Reset password</Text>
            <Text className={`my-2 text-black`}>Kindly provide your registered email address</Text>

          </View>

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
        <ProxyButton title={"Reset"} handlePress={handleSubmit(handleReset)} />

        <AuthFooter items={footerItems} />

      </View>
    </View>
  )
}



export default ResetScreen;