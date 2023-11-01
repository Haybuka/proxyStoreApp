import React from 'react';
import { View, StyleSheet } from 'react-native';
import LifestyleCard from '../card';

function Facials(props) {
  const facial = [
    {
      name: 'Facial Treatment',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Facial.png'),
      id: 1,
      description: "face care"
    },
    {
      name: 'Facial Treatment',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Facial.png'),
      id: 2,
      description: "face care"
    },
    {
      name: 'Facial Treatment',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Facial.png'),
      id: 3,
      description: "face care"
    },
    {
      name: 'Facial Treatment',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Facial.png'),
      id: 4,
      description: "face care"
    },
    {
      name: 'Facial Treatment',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Facial.png'),
      id: 5,
      description: "face care"
    },
    {
      name: 'Facial Treatment',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Facial.png'),
      id: 6,
      description: "face care"
    },
    {
      name: 'Facial Treatment',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Facial.png'),
      id: 7,
      description: "face care"
    },
    {
      name: 'Last One',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Facial.png'),
      id: 8,
      description: "face care"
    }
  ]
  return (
    <View className="flex flex-row flex-wrap py-6 justify-between">
      {
        facial.map((facials, id) => (
          <LifestyleCard card={facials} key={id} />
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default Facials;