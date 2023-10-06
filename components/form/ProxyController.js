import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Controller } from "react-hook-form"
import ProxyInput from '../ProxyInput';

function ProxyController({ control, name, title, ...rest }) {

  return (
    <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (

          <ProxyInput
            title={title}
            autoCorrect={false}
            {...rest}
            name={name}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}

        name={name}
      />
      {/* {errors.firstName && <Text>This is required.</Text>} */}
      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default ProxyController;