import { StatusBar, StyleSheet, View, SafeAreaView, FlatList, Text,ActivityIndicator } from 'react-native'
import {useState, useEffect} from 'react'

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export default function Networking() {

    const [postList, setPostList] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = async (limit=10) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
        )
        const data = await response.json();
        setPostList(data);
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, []);

    if (isLoading) {
        return (
            <SafeAreaView style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={"blue"} />
            </SafeAreaView>
        )
    }
  return (
      <SafeAreaView style={styles.container}>
          <View style={styles.listContainer}>
              <FlatList data={postList} renderItem={({item}) => {
                  return (
                      <View style={styles.card}>
                          <Text style={styles.titleText}>{item.title}</Text>
                          <Text style={styles.bodyText}>{item.body}</Text>
                      </View>
                  )
              }}
                  ItemSeparatorComponent={() => <View style={{ height: 20 }}
                      
                  />}   
                  ListHeaderComponent={<Text style={{ flex: 1, justifyContent: "center", color: "yellow", fontSize: 26, alignItems: "center" }}>Dummy Posts</Text>}
                  ListFooterComponent={<Text style={{color:"red", fontSize:20}}>The End</Text>}
              />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        paddingTop: StatusBar.currentHeight
    },
    listContainer: {
        flex: 1,
        paddingHorizontal: 16
    },
    card: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        borderWidth:1
    },
    titleText: {
        fontSize:30
    },
    bodyText: {
        fontSize: 24,
        color:"orange"
    },
    loadingContainer: {
        flex: 1,
        backgroundColor: "green",
        paddingTop: StatusBar.currentHeight,
        justifyContent: "center",
        alignItems:"center"

    }
})