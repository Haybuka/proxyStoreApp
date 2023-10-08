import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

function AccountHeader(props) {
  return (
    <View className={`pb-6 h-[148px] justify-end  bg-[#03041E]`}>
      <ImageBackground imageStyle={{ resizeMode: 'cover', objectFit: 'fill' }} source={require("../../assets/Auth_bg.png")} className={`h-full px-4  justify-end`}>

      </ImageBackground>
    </View>
  );
}


export default AccountHeader;