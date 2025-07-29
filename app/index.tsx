import { View, Pressable, Text } from 'react-native'
import { Link, router } from 'expo-router'

export default function Index() {
  //import Redirect from expo-router for this to work
  // const isLoggedIn = true;
  // if (!isLoggedIn) {
  //   return <Redirect href={'/login'}/>
  // }
  return (
    
    <View className=" flex justify-center items-center min-h-screen">
      <Link href="/about">About Page</Link>
      <Link href="/profile">Profile Page</Link>
      <Link href="/products">Products</Link>
      <Link href="/register">Register</Link>
      <Link href="/login">Login</Link>
      <Link href="/forgot-password">Forgot-password</Link>
      <Pressable className=' bg-orange-500 p-2 rounded-lg' onPress={()=>router.push('/modal')}>
        <Text>Modal</Text>
      </Pressable>
      <Link href={'/modal2'}>Modal2</Link>
    </View>
  )
}
