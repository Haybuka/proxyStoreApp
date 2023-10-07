import React from 'react';
import { ScrollView, View } from 'react-native';
import AuthHeader from '../components/AuthHeader';
import ProxyButton from '../components/ProxyButton';
import AuthFooter from '../components/AuthFooter';
import ProxyController from '../components/form/ProxyController';
import { useForm } from "react-hook-form"

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';


const zodSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string("Email is required").email('Email format is not valid'),
  password: z.string("Password is required").min(4, "Password must be greater than 4"),
  password2: z.string("Password is required").min(4, "Password must be greater than 4"),

}).refine(
  (data) => data.password === data.password2, {
  message: 'Passwords dont match',
  path: ["password2"]
}
)

function SignupScreen({ navigation }) {
  const {
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      password2: "",
      name: ""
    },
    resolver: zodResolver(zodSchema)
  })

  const handleSignup = (data) => {
    console.log("signing up", data)
  }

  const handleLoginRedirect = () => {
    navigation.navigate("Login")
  }



  const footerItems = {
    description: "Already have an account ?",
    text: "Login",
    textRedirectHandler: handleLoginRedirect
  }
  return (
    <ScrollView >
      <AuthHeader title={'Sign Up'} description={'Create an account to get started'} />
      <View className="px-2">
        <View className="py-6">
          <ProxyController
            title="Full Name"
            placeholder={'John doe'}
            autoCapitalize="none"
            autoCorrect={false}
            name={'name'}
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

        <ProxyButton title={"Sign up"} handlePress={handleSubmit(handleSignup)} />
        <AuthFooter items={footerItems} />
      </View>
    </ScrollView>
  );
}



export default SignupScreen;