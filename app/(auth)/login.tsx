import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function LoginPage() {
  return (
    <View>
      <Text>LoginPage</Text>
      <Button title="Login" onPress={() => router.push('/profile')} />
    </View>
  )
}
//In place of push, there are also replace which replaces the current route and you can't go back to it and back() for going back to the previous screen