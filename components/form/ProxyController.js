import React from 'react';
import { View, Text } from 'react-native';
import { Controller } from "react-hook-form"
import ProxyInput from '../ProxyInput';

function ProxyController({ control, name, title, ...rest }) {

  return (
    <View className="my-3">
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value }, fieldState: { error, isDirty, isTouched } }) => {

          return (
            (

              <>
                <ProxyInput
                  title={title}
                  autoCorrect={false}
                  {...rest}
                  name={name}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                {(error) && <Text className="text-red-600">{error?.message}</Text>}
              </>
            )
          )
        }}

        name={name}
      />

    </View>
  );
}


export default ProxyController;