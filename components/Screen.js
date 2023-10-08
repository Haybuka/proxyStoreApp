import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants'

function Screen({ children, bg }) {
  return (
    <SafeAreaView style={{ paddingTop: Constants.statusBarHeight, paddingHorizontal: 10, flex: 1, backgroundColor: bg ? bg : "#FFFFFF" }}>
      {children}
    </SafeAreaView>
  );
}



export default Screen;