import { View, TextInput, Text, Pressable } from 'react-native';
import SearchIcon from '../../assets/icon/account/search';
import cls from 'classnames';
import FilterIcon from '../../assets/icon/home/filterIcon';

const SearchVendor = ({ css }) => {
  return (
    <View className="flex-row items-center mb-8">
      <View className={cls('flex flex-row items-center py-3', css)}>
        <View className="flex-row items-center border border-gray-200 py-2 px-3 rounded-lg">
          <SearchIcon />
          <View className={cls('mx-2', css)}>
            <TextInput placeholder="Search vendor" />
          </View>
        </View>
      </View>
      <Pressable className="bg-[#0D5FFF] py-3 px-3 rounded-lg text-white flex-row gap-x-2 ml-2">
        <Text className="text-white tracking-wider">Filter</Text>
        <FilterIcon />
      </Pressable>
    </View>
  );
};

export default SearchVendor;
