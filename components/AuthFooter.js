
import { Pressable, Text, View } from 'react-native';

function AuthFooter({ items }) {

  const { description, text, textRedirectHandler } = items
  return (
    <View>

      <View className="my-4 flex-row justify-center items-center">
        <Text className="text-center">{description} </Text>
        <Pressable onPress={textRedirectHandler}><Text className="text-[#0D5FFF] underline">{text}</Text></Pressable>
      </View>
    </View>
  );
}



export default AuthFooter;