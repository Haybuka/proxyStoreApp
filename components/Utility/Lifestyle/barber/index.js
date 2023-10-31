import React from 'react';
import { View, StyleSheet } from 'react-native';
import LifestyleCard from '../card';

const barbing = [
  {
    name: 'Ultimate cutz',
    address: "153, Ikorodu rd, Palm ...",
    image: require('../../../../assets/icon/utilities/lifestyle/BarberCutz.png'),
    id: 1,
    description: "Mens clipper cut"
  },
  {
    name: 'Ultimate cutz',
    address: "153, Ikorodu rd, Palm ...",
    image: require('../../../../assets/icon/utilities/lifestyle/BarberCutz.png'),
    id: 2,
    description: "Mens clipper cut"
  },
  {
    name: 'Ultimate cutz',
    address: "153, Ikorodu rd, Palm ...",
    image: require('../../../../assets/icon/utilities/lifestyle/BarberCutz.png'),
    id: 3,
    description: "Mens clipper cut"
  },
  {
    name: 'Ultimate cutz',
    address: "153, Ikorodu rd, Palm ...",
    image: require('../../../../assets/icon/utilities/lifestyle/BarberCutz.png'),
    id: 4,
    description: "Mens clipper cut"
  },
  {
    name: 'Ultimate cutz',
    address: "153, Ikorodu rd, Palm ...",
    image: require('../../../../assets/icon/utilities/lifestyle/BarberCutz.png'),
    id: 5,
    description: "Mens clipper cut"
  },
  {
    name: 'Ultimate cutz',
    address: "153, Ikorodu rd, Palm ...",
    image: require('../../../../assets/icon/utilities/lifestyle/BarberCutz.png'),
    id: 6,
    description: "Mens clipper cut"
  },
  {
    name: 'Ultimate cutz',
    address: "153, Ikorodu rd, Palm ...",
    image: require('../../../../assets/icon/utilities/lifestyle/BarberCutz.png'),
    id: 7,
    description: "Mens clipper cut"
  },
  {
    name: 'Last One',
    address: "153, Ikorodu rd, Palm ...",
    image: require('../../../../assets/icon/utilities/lifestyle/BarberCutz.png'),
    id: 8,
    description: "Mens clipper cut"
  }
]

function Barber() {
  return (
    <View className="flex flex-row flex-wrap py-6 justify-between">
      {
        barbing.map((barber, id) => (
          <LifestyleCard card={barber} key={id} />
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default Barber;