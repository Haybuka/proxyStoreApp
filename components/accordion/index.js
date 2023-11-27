import React, { useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import ArrowRight from '../../assets/icon/ArrowRight';

import cls from 'classnames'

function Accordion({ children, title }) {

  const [isClicked, setisClicked] = useState(false)

  const handleAccordion = () => {
    setisClicked(prev => !prev);
  }

  return (
    <View>
      <Pressable onPress={handleAccordion} className="flex-row justify-between border-b border-[#ECEFF5] py-4">

        <Text className="font-semibold tracking-wider">{title}</Text>

        <View className={cls("justify-center items-center transition-all origin-top-left", isClicked ? "-rotate-90" : "rotate-90 ")}>
          <ArrowRight stroke='#0D5FFF' />
        </View>
      </Pressable>
      {isClicked && (
        <View className="py-3  my-2">
          {children}
        </View>
      )}
    </View>
  );
}


export default Accordion;