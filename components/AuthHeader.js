import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native';
import colors from '../utils/colors';

function AuthHeader({ title, description }) {
  return (
    <ImageBackground resizeMode='stretch' source={require("../assets/Auth_bg.png")} className={`h-56 bg-repeat bg-[${colors.primary}] px-4 justify-end`}>
      <View className={`pb-6`}>
        <TouchableOpacity className="mb-6">
          <Text>Back</Text>
        </TouchableOpacity>
        <View>
          <Text className="text-white text-2xl">{title}</Text>
          <Text className="text-white my-2">{description}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default AuthHeader;