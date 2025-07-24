import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function ProductDetail() {
    const { id } = useLocalSearchParams();
    // const numericId = parseInt(id as string, 10);
  return (
    <View className=" flex justify-center items-center min-h-screen">
      <Text >Details about product with id {id}
      </Text>
    </View>
  )
}
