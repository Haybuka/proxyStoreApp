import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Profile from '../assets/icon/navigation/Profile';
import Transaction from '../assets/icon/navigation/Transaction';
import Home from '../assets/icon/navigation/Home';

function BottomTabButton({ onPress, icon, focused }) {

  const selectSvg = (icon) => {
    switch (icon) {
      case "home":

        return <Home focused={focused} />
      case "transaction":

        return <Transaction focused={focused} />

      case "profile":

        return <Profile focused={focused} />

      default:
        break;
    }
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {
        selectSvg(icon)
      }



    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  }
});

export default BottomTabButton;

