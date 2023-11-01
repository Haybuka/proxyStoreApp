import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LifestyleCard from '../card';

function MakeUp(props) {
  const makeups = [
    {
      name: 'Hair Dresser',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Makeup.png'),
      id: 1,
      description: "Women Beauty Saloon"
    },
    {
      name: 'Hair Dresser',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Makeup.png'),
      id: 2,
      description: "Women Beauty Saloon"
    },
    {
      name: 'Hair Dresser',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Makeup.png'),
      id: 3,
      description: "Women Beauty Saloon"
    },
    {
      name: 'Hair Dresser',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Makeup.png'),
      id: 4,
      description: "Women Beauty Saloon"
    },
    {
      name: 'Hair Dresser',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Makeup.png'),
      id: 5,
      description: "Women Beauty Saloon"
    },
    {
      name: 'Hair Dresser',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Makeup.png'),
      id: 6,
      description: "Women Beauty Saloon"
    },
    {
      name: 'Hair Dresser',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Makeup.png'),
      id: 7,
      description: "Women Beauty Saloon"
    },
    {
      name: 'Last One',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Makeup.png'),
      id: 8,
      description: "Mens clipper cut"
    }
  ]
  return (
    <View className="flex flex-row flex-wrap py-6 justify-between">
      {
        makeups.map((makeup, id) => (
          <LifestyleCard card={makeup} key={id} />
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default MakeUp;