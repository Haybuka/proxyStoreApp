import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import colors from '../utils/colors'

const WelcomeScreen = () => {

  console.log(colors)
  return (
    <ImageBackground resizeMode='contain' className={`flex-1 bg-right-bottom bg-[${colors.primary}] justify-center items-center`} source={require("../assets/splash.png")} >
      <View className="h-20 w-20">
        <Image resizeMode="contain" className="w-full h-full" source={require('../assets/petlams_icon.png')} />
      </View>
    </ImageBackground>
  )
}

export default WelcomeScreen