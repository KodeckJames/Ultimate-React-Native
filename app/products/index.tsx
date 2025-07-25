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
      <Link href="/products/best-sellers/playstation-5">
        PlayStation 5 (Best Sellers)
      </Link>
      <Link href="/products/deals/black-friday/playstation-5">
        PlayStation 5 (Deals)
      </Link>
      <Link href="/products/search/playstation-5">PlayStation 5 (Search)</Link>
    </View>
  )
}
