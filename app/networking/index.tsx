import {
  StatusBar,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Text,
  ActivityIndicator,
  TextInput,
  Button,
} from 'react-native'
import { useState, useEffect } from 'react'

type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export default function Networking() {
  const [postList, setPostList] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [isPosting, setIsPosting] = useState(false)
  const [error, setError] = useState('')

  const fetchData = async (limit = 10) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      )
      const data = await response.json()
      setPostList(data)
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      setIsLoading(false)
      setError('Falied to fetch post list')
    }
  }
  const handleRefresh = () => {
    setRefreshing(true)
    fetchData(20)
    setRefreshing(false)
  }

  const addPost = async () => {
    setIsPosting(true)
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: postTitle,
            body: postBody,
          }),
        }
      )
      const newPost = await response.json()
      setPostList([newPost, ...postList])
      setPostTitle('')
      setPostBody('')
      setIsPosting(false)
      setError('')
    } catch (error) {
      console.error('Error adding new post:', error)
      setError('Failed to add new post')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={'blue'} />
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : (
        <>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Post Title"
              value={postTitle}
              onChangeText={setPostTitle}
            />
            <TextInput
              style={styles.input}
              placeholder="Post Body"
              value={postBody}
              onChangeText={setPostBody}
            />
            <Button
              title={isPosting ? 'Adding Post' : 'Add Post'}
              onPress={addPost}
              disabled={isPosting}
            />
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={postList}
              renderItem={({ item }) => {
                return (
                  <View style={styles.card}>
                    <Text style={styles.titleText}>{item.title}</Text>
                    <Text style={styles.bodyText}>{item.body}</Text>
                  </View>
                )
              }}
              ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
              ListHeaderComponent={
                <Text
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    color: 'yellow',
                    fontSize: 26,
                    alignItems: 'center',
                  }}
                >
                  Dummy Posts
                </Text>
              }
              ListFooterComponent={
                <Text style={{ color: 'red', fontSize: 20 }}>The End</Text>
              }
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 30,
  },
  bodyText: {
    fontSize: 24,
    color: 'orange',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: 'green',
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
  },
  errorContainer: {
    backgroundColor: '#FFC0CB',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: 'center',
  },
  errorText: {
    color: '#D8000C',
    fontSize: 16,
    textAlign: 'center',
  },
})
