import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function ProfileNotFoundPage() {
  return (
    <View className=' flex justify-center items-center min-h-screen'>
          <Text>Profile page not found</Text>
          <Link href={'/'}>Go back Home🏡</Link>
    </View>
  )
}