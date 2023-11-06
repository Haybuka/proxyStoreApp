import React from 'react';
import { View, Pressable, Text } from 'react-native';
import cls from 'classnames'

function TypeSelect({ title, handleTypePress, userSelect, value }) {

  //The value is value of the current component.
  // The userSelect it receives is reference to what use Selects

  const handleSelect = () => {
    handleTypePress(value)
  }
  return (
    <Pressable onPress={handleSelect} className={cls("py-3 w-1/2 rounded-md bg-transparent", userSelect === value && 'bg-white')}>
      <View >
        <Text className="text-center">{title}</Text>
      </View>
    </Pressable>
  );
}



export default TypeSelect;