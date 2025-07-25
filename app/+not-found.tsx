import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function CustomNotFoundPage() {
  return (
    <View className=' flex justify-center items-center min-h-screen'>
          <Text>Page not found</Text>
          <Link href={'/'}>Go back Home🏡</Link>
    </View>
  )
}