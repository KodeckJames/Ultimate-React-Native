import {
  View,
  Pressable,
  Text,
  ActivityIndicator,
  Button,
  Alert,
} from 'react-native'
import { Link, router } from 'expo-router'

export default function Index() {
  //import Redirect from expo-router for this to work
  // const isLoggedIn = true;
  // if (!isLoggedIn) {
  //   return <Redirect href={'/login'}/>
  // }
  return (
    <View className=" flex-1 justify-center items-center min-h-screen">
      <ActivityIndicator size={'large'} color={'red'} animating={true} />
      <Link href="/about">About Page</Link>
      <Link href="/profile">Profile Page</Link>
      <Link href="/products">Products</Link>
      <Link href="/register">Register</Link>
      <Link href="/login">Login</Link>
      <Link href="/forgot-password">Forgot-password</Link>
      {/* <Link href="/dynamicUI/index">Dynamic UI</Link> */}
      <Pressable
        className=" bg-orange-500 p-2 rounded-lg"
        onPress={() => router.push('/modal')}
      >
        <Text>Modal</Text>
      </Pressable>
      <Link href={'/modal2'}>Modal2</Link>
      <View>
        <Button
          title="Alert"
          onPress={() =>
            Alert.alert('Hello, World!', "How are Ya'll doing", [
              {
                text: 'Cancel',
                onPress: () => console.log('Alert Canceled'),
              },
              {
                text: 'Aloo',
                onPress: () => console.log('Aloo Pressed'),
              },
              {
                text: 'JJ',
                onPress: () => console.log("It's me JJ"),
              },
            ])
          }
        />
        <Button title='Alert2' onPress={()=>alert("Yoinks, this works too!")}/>
      </View>
    </View>
  )
}
