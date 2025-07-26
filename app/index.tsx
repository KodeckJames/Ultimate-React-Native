import { View } from 'react-native'
import { Link } from 'expo-router'

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
    </View>
  )
}
