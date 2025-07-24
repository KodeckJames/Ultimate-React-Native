import '@/global.css'
import { View } from 'react-native'
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View className=" flex justify-center items-center min-h-screen">
      <Link href="/about">About Page</Link>
      <Link href="/profile">Profile Page</Link>
    </View>
  )
}
