import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function ProductListings() {
  return (
    <View className=" flex justify-center items-center min-h-screen">
      <Text>Products</Text>
      <Link href={'/products/1'}>Product 1</Link>
      <Link href={'/products/2'}>Product 2</Link>
      <Link href={'/products/3'}>Product 3</Link>
    </View>
  )
}
