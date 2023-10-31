import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, ScrollView, RefreshControl, Pressable, Alert, TouchableOpacity } from 'react-native';
import VolutionInput from './VolutionInput';

function Codevolution() {

  const [postList, setPostList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  const [addPost, setAddPost] = useState(false)

  const [error, setError] = useState('')

  const [post, setPost] = useState('')
  const [postBody, setPostBody] = useState('')

  const postData = async (posts) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'post',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          title: posts.post,
          body: posts.postBody
        })
      });
      const newPost = await response.json()
      setPostList([newPost, ...postList])
      setPost("")
      setError("")
      setPostBody("")
    } catch (error) {
      console.error("error ading post", error)
      setError("Error adding new post")
    }
  }

  const fetchData = async (limit = 5) => {
    try {
      const response = await fetch(`https://jsonplaceholderx.typicode.com/posts?_limit=${limit}`);
      const data = await response.json()
      setPostList(data)
      setIsLoading(false)
      setError('')
    } catch (error) {
      console.error("error fetching data", error)
      setIsLoading(false)
      setError("failed to fetch post list")
    }
  }

  const handleRefresh = () => {
    setRefreshing(true)
    fetchData(10)
    setRefreshing(false)
  }

  const handlePostSubmit = () => {
    Alert.alert(`post submitted - ${post} : ${postBody}`)
    setAddPost(false)
    let posts = {
      post,
      postBody
    }
    postData(posts)
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
      <View>
        <TouchableOpacity onPress={() => setAddPost(post => !post)}>
          <Text > {!addPost ? '+ Add Post' : 'Close'}</Text>
        </TouchableOpacity>
        {
          addPost && (
            <View>
              <VolutionInput value={post} onChange={setPost} placeholder="Posts" />
              <VolutionInput value={postBody} onChange={setPostBody} placeholder="Post Body" />
              <Pressable onPress={handlePostSubmit} className="bg-blue-500  text-center py-3 rounded-md my-3">
                <Text className="text-center text-white">Submit</Text>
              </Pressable>
            </View>
          )
        }
        {
          error ? (
            <View>
              <Text className="text-red-700 text-center">{error}</Text>
            </View>
          ) : (
            <View className="py-4 flex-1 flex-row">
              <FlatList
                data={postList}
                keyExtractor={(item) => item?.id}
                ItemSeparatorComponent={<View className="h-3"></View>}
                ListEmptyComponent={<Text>No posts found</Text>}
                ListHeaderComponent={<Text className="text-center mb-3 text-sm">Post List</Text>}
                ListFooterComponent={<Text className="text-center mt-3 text-sm">End of List</Text>}
                renderItem={({ item }) => (
                  <View className="bg-white p-3 rounded-md border">
                    <Text className="text-[14px]">{item.id}</Text>
                    <Text className="text-[20px]">{item.title}</Text>
                    <Text className="text-[16px] text-[#666]">{item.body}</Text>
                  </View>
                )}
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            </View>
          )
        }

      </View>
    </ScrollView>
  );
}


export default Codevolution;