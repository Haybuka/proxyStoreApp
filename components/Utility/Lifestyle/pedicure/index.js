import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LifestyleCard from '../card';

function Pedicure(props) {
  const pedicures = [
    {
      name: 'Beauty treatment',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Pedicure.png'),
      id: 1,
      description: "Women Beauty Saloon"
    },
    {
      name: 'Beauty treatment',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Pedicure.png'),
      id: 2,
      description: "Women Beauty Saloon"
    },
    {
      name: 'Beauty treatment',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Pedicure.png'),
      id: 3,
      description: "Women Beauty Saloon"
    },
    {
      name: 'Beauty treatment',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Pedicure.png'),
      id: 4,
      description: "Women Beauty Saloon"
    },
    {
      name: 'Beauty treatment',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Pedicure.png'),
      id: 5,
      description: "Women Beauty Saloon"
    },
    {
      name: 'Beauty treatment',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Pedicure.png'),
      id: 6,
      description: "Women Beauty Saloon"
    },
    {

      name: 'Beauty treatment',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Pedicure.png'),
      id: 7,
      description: "Women Beauty Saloon"
    },
    {
      name: 'Last One',
      name: 'Beauty treatment',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Pedicure.png'),
      id: 8,
      description: "Mens clipper cut"
    }
  ]
  return (
    <View className="flex flex-row flex-wrap py-6 justify-between">
      {
        pedicures.map((pedicure, id) => (
          <LifestyleCard card={pedicure} key={id} />
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default Pedicure;