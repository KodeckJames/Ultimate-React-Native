import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function SafeAreaViewComponent() {
  return (
    <SafeAreaView className=' flex-1 bg-purple-500'>
        <View className=' flex-1 bg-purple-500'>
          <View className=' p-20'>
              <Text className=' text-lg font-bold text-center'>SafeAreaViewComponent</Text>
          </View>
        </View>
    </SafeAreaView>
  )
}