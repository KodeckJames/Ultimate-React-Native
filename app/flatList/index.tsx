import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import pokemons from '@/data/pokemonList.json'

export default function FlatListComponent() {
  return (
    <SafeAreaView>
      <FlatList
        data={pokemons}
        horizontal={false}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        ListEmptyComponent={<Text>No Items found</Text>}
        renderItem={({ item }) => {
          //   console.log(item.id);
          return (
            <View key={item.id}>
              <Text>{item.type}</Text>
              <Text>{item.name}</Text>
            </View>
          )
        }}
      />
    </SafeAreaView>
  )
}
