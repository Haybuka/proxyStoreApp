import React from 'react';
import { View, StyleSheet } from 'react-native';
import LifestyleCard from '../card';

function Manicure(props) {
  const manicures = [
    {
      name: 'Nails treatment',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Manicure.png'),
      id: 1,
      description: "Women Beauty Saloon"
    },
    {
      name: 'Nails treatment',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Manicure.png'),
      id: 2,
      description: "Women Beauty Saloon"
    },
    {
      name: 'Nails treatment',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Manicure.png'),
      id: 3,
      description: "Women Beauty Saloon"
    },
    {
      name: 'Nails treatment',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Manicure.png'),
      id: 4,
      description: "Women Beauty Saloon"
    },
    {
      name: 'Nails treatment',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Manicure.png'),
      id: 5,
      description: "Women Beauty Saloon"
    },
    {
      name: 'Nails treatment',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Manicure.png'),
      id: 6,
      description: "Women Beauty Saloon"
    },
    {
      name: 'Nails treatment',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Manicure.png'),
      id: 7,
      description: "Women Beauty Saloon"
    },
    {
      name: 'Last One',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Manicure.png'),
      id: 8,
      description: "Mens clipper cut"
    }
  ]
  return (
    <View className="flex flex-row flex-wrap py-6 justify-between">
      {
        manicures.map((manicure, id) => (
          <LifestyleCard card={manicure} key={id} />
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default Manicure;