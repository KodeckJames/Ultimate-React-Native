import '../global.css'
import { Slot } from 'expo-router'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'

export default function RootLayout() {
  return (
    <ScrollView>
      <SafeAreaView>
        <View>
          <Text className=" bg-red-500 p-8">My Expo App</Text>
        </View>
        <Slot />;
        <View className="">
          <Text className=" bg-blue-500 p-8 mb-0 ">© JJ</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}
