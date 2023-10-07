import { View, Text, ImageBackground, Image } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../utils/colors'

const WelcomeScreen = ({ navigation, route }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login")
    }, 3000)
  }, [])

  return (
    <ImageBackground resizeMode='contain' className={`flex-1 bg-right-bottom bg-[#0D5FFF] justify-center items-center bg-repeat`} source={require("../assets/splash.png")} >
      <View className="h-20 w-20 animate-pulse">
        <Image resizeMode="contain" className="w-full h-full" source={require('../assets/petlams_icon.png')} />
      </View>
    </ImageBackground>
  )
}

export default WelcomeScreen