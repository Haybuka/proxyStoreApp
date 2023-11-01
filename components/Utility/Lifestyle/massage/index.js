import React from 'react';
import { View, StyleSheet } from 'react-native';
import LifestyleCard from '../card';

function Massage(props) {
  const massages = [
    {
      name: 'Massage',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Massage.png'),
      id: 1,
      description: "Spa treatment"
    },
    {
      name: 'Massage',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Massage.png'),
      id: 2,
      description: "Spa treatment"
    },
    {
      name: 'Massage',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Massage.png'),
      id: 3,
      description: "Spa treatment"
    },
    {
      name: 'Massage',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Massage.png'),
      id: 4,
      description: "Spa treatment"
    },
    {
      name: 'Massage',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Massage.png'),
      id: 5,
      description: "Spa treatment"
    },
    {
      name: 'Massage',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Massage.png'),
      id: 6,
      description: "Spa treatment"
    },
    {
      name: 'Massage',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Massage.png'),
      id: 7,
      description: "Spa treatment"
    },
    {
      name: 'Last One',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../../../../assets/icon/utilities/lifestyle/Massage.png'),
      id: 8,
      description: "Spa treatment"
    }
  ]
  return (
    <View className="flex flex-row flex-wrap py-6 justify-between">
      {
        massages.map((massage, id) => (
          <LifestyleCard card={massage} key={id} />
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default Massage;