import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';

function LifestyleCard({ card }) {
  const navigation = useNavigation()

  const handleClick = (card) => {

    navigation.navigate("ServiceSelect", {
      ...card
    })
  }

  return (
    <TouchableOpacity onPress={() => handleClick(card)} className="justify-center items-center m-1 p-3 py-8  rounded-md border border-gray-100">
      <Image resizeMode='contain' source={card.image} />
      <Text>{card.name} {card.id}</Text>
      <Text numberOfLines={1}>{card.address}</Text>
    </TouchableOpacity>
  );
}



export default LifestyleCard;