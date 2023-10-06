import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { ArrowLeftIcon } from "react-native-heroicons/outline";

import ProxyInput from '../components/ProxyInput';
import AuthFooter from '../components/AuthFooter';
import { useNavigation } from '@react-navigation/native';

function ResetScreen({ }) {

  const navigation = useNavigation()

  const footerItems = {
    btnText: "Reset",
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
          <ProxyInput
            title="Email Address"
            placeholder={'Johndoe@email.com'}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            name={'email'}
          />

        </View>
        <AuthFooter items={footerItems} />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {}
});

export default ResetScreen;