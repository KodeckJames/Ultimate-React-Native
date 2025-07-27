import '../global.css'
import { Stack } from 'expo-router'
import { Pressable, Text, Image } from 'react-native'

const LogoTitle = () => {
  return (
    <Image
      width={30}
      height={30}
      source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
    />
  )
}

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: 'yellow',
        headerStyle: { backgroundColor: 'purple' },
        headerShadowVisible: true,
        headerTitleStyle: {
          fontFamily: 'sans',
          fontWeight: 'condensed',
          color: 'yellow',
        },
        headerTitleAlign: 'center',
        headerRight: () => (
          <Pressable onPress={() => alert('Menu Button Pressed!')}>
            <Text className=" text-yellow-500 font-bold">Menu</Text>
          </Pressable>
        ),
        headerTitle: (props) => <LogoTitle />,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="about/index"
        options={{
          title: 'About Page',
        }}
      />
    </Stack>
  )
}
