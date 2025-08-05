import { View, Text, SafeAreaView, FlatList, SectionList } from 'react-native'
import React from 'react'
import pokemons from '@/data/pokemonList.json'
import groupedPokemons from '@/data/grouped-data.json'

export default function FlatListComponent() {
  return (
    <SafeAreaView>
      <FlatList
        data={pokemons}
        horizontal={false}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        ListEmptyComponent={<Text>No Items found</Text>}
        ListHeaderComponent={<Text>Pokemon Cards Header</Text>}
        ListFooterComponent={<Text>Pokemon Cards Footer</Text>}
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
      <SectionList
        sections={groupedPokemons}
        renderSectionHeader={({ section }) => <Text>{section.type}</Text>}
        SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item}</Text>
            </View>
          )
        }}
      />
    </SafeAreaView>
  )
}
