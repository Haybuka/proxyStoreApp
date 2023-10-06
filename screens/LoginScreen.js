import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import colors from '../utils/colors';
import AuthHeader from '../components/AuthHeader';

function LoginScreen({ }) {
  return (
    <View >
      <AuthHeader title={'Sign Up'} description={'Create an account to get started'} />
    </View>
  );
}



export default LoginScreen;