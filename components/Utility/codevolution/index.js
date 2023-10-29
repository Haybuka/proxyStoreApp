import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, ActivityIndicator, ScrollView, RefreshControl } from 'react-native';

function Codevolution(props) {

  const [postList, setPostList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  const fetchData = async (limit = 5) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    const data = await response.json()
    setPostList(data)
    setIsLoading(false)
  }
  const handleRefresh = () => {
    console.log("refresh pulled")
    setRefreshing(true)
    fetchData(10)
    setRefreshing(false)

  }
  useEffect(() => {
    fetchData()
  }, [])



  if (isLoading) {
    return (
      <View className="flex-1  bg-white justify-center items-center " style={{ flex: 1 }}>
        <ActivityIndicator size={'large'} color={'blue'} />
        <Text>Loading</Text>
      </View>
    )
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      }
    >
      <View className=" bg-[#f5f5f5]">

        <View className="py-4 flex-1 flex-row">
          <Text className="textred-500">Hi</Text>
          <FlatList
            data={postList}
            keyExtractor={(item) => item?.id}
            ItemSeparatorComponent={<View className="h-3"></View>}
            ListEmptyComponent={<Text>No posts found</Text>}
            ListHeaderComponent={<Text className="text-center mb-3 text-2xl">Post List</Text>}
            ListFooterComponent={<Text className="text-center mt-3 text-2xl">End of List</Text>}
            renderItem={({ item }) => (
              <View className="bg-white p-3 rounded-md border">
                <Text className="text-[26px]">{item.id}</Text>
                <Text className="text-[26px]">{item.title}</Text>
                <Text className="text-[20px] text-[#666]">{item.body}</Text>
              </View>
            )}
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default Codevolution;