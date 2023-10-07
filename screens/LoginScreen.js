import React from 'react';
import { Pressable, Text, View, ScrollView } from 'react-native';
import AuthHeader from '../components/AuthHeader';
import AuthFooter from '../components/AuthFooter';
import { useForm } from "react-hook-form"
import ProxyButton from '../components/ProxyButton';
import ProxyController from '../components/form/ProxyController';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const zodSchema = z.object({
  email: z.string("Email is required").email('Email format is not valid'),
  password: z.string("Password is required").min(4, "Password must be greater than 4"),
});

function LoginScreen({ navigation }) {
  const {
    control,
    reset,
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
    resolver: zodResolver(zodSchema)
  })


  const handleForgetPassword = () => {
    navigation.navigate("Reset")
  }

  const handleLogin = (data) => {
    console.log("logging in", data)
    navigation.navigate("Home")
    reset()
  }

  const handleSignupRedirect = () => {
    navigation.navigate("Register")
  }
  const footerItems = {
    description: "Don't have an account ?",
    text: "Sign up",
    textRedirectHandler: handleSignupRedirect
  }
  return (
    <ScrollView>
      <AuthHeader title={'Login'} description={`Login to your account. We'd love to have you on board!`} />
      <View className="px-2">
        <View className="py-6">
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
          <Pressable onPress={handleForgetPassword}>
            <Text className="text-[#0D5FFF] font-semibold">Forgot Password?</Text>
          </Pressable>

          <ProxyButton title={"Login"} handlePress={handleSubmit(handleLogin)} />
          <AuthFooter items={footerItems} />

        </View>

      </View>
    </ScrollView>
  )
}



export default LoginScreen;