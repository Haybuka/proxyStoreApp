import React, { useLayoutEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import Header from '../components/Utility/Lifestyle/header';

function FilterScreen({ route, route: { params }, navigation }) {

  const [pageTitle, setPageTitle] = useState("")

  useLayoutEffect(() => {
    setPageTitle(route?.name)
  }, [route?.name])


  return (
    <Screen>
      <Header title={pageTitle} />
      <View className=" mb-10">

      </View>
    </Screen>
  );
}



export default FilterScreen;