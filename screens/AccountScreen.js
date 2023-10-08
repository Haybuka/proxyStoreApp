import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Screen from '../components/Screen';
import AccountHeader from '../components/Account/Header'
function AccountScreen(props) {
  return (
    <View className="flex-1 bg-white">
      <AccountHeader />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default AccountScreen;