import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { MaterialCommunityIcons } from '@expo/vector-icons'

function BottomTabButton({ onPress, icon }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <MaterialCommunityIcons name={icon} size={28} color={"white"} />
      {/* <SvgUri
        width="100%"
        height="100%"
        
        uri={require("../assets/profile.svg")}
      /> */}


    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    // marginTop: 3
    // flex: 1
  }
});

export default BottomTabButton;

