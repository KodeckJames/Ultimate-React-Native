import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

export default function CatchAllProductDetails() {
  const { rest } = useLocalSearchParams<{rest: string[]}>()
  // const numericId = parseInt(id as string, 10);
  return (
    <View className=" flex justify-center items-center min-h-screen">
          <Text>Catch all product details</Text>
          <Text>Details about product at {rest.join("/")}</Text>
    </View>
  )
}
