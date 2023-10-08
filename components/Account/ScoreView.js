
import { View, Text } from 'react-native';
import CreditScore from '../../assets/icon/account/CreditScore';

function ScoreView({ score }) {
  return (
    <View className="mt-28 flex-row items-center">
      <View>
        <CreditScore />
      </View>
      <View className="ml-2">
        <Text className="text-2xl">{score}</Text>
        <Text className="text-sm text-gray-400">Credit score</Text>
      </View>
    </View>
  );
}



export default ScoreView;