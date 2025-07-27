import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function TabsLayout() {
  return (
      <Tabs screenOptions={{
          headerTitleAlign: "center",
          tabBarLabelPosition: "below-icon",
          tabBarShowLabel: true,
          headerTitle: "My Expo App 😆",
          tabBarActiveTintColor: "purple",
          tabBarInactiveTintColor: "orange",
          tabBarActiveBackgroundColor: "black",
          tabBarInactiveBackgroundColor: "grey",
          tabBarStyle: { backgroundColor: "yellow" },
          headerStyle: { backgroundColor: "purple" },
          headerTintColor:"orange"
    }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={24} />
            ),
          title:"Home"
        }}
      />
      <Tabs.Screen
        name="exploretab"
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
            ),
          title:"Explore"
        }}
      />
      <Tabs.Screen
        name="profiletab"
        options={{
          tabBarLabel: 'My Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
            ),
            tabBarBadge: 4,
            title: "My Profile",
          
        }}
      />
    </Tabs>
  )
}

//   STACK NAVIGATION CODE
// import '../global.css'
// import { Stack } from 'expo-router'
// import { Pressable, Text, Image } from 'react-native'

// const LogoTitle = () => {
//   return (
//     <Image
//       width={30}
//       height={30}
//       source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
//     />
//   )
// }

// export default function RootLayout() {
//   return (
//     <Stack
//       screenOptions={{
//         headerTintColor: 'yellow',
//         headerStyle: { backgroundColor: 'purple' },
//         headerShadowVisible: true,
//         headerTitleStyle: {
//           fontFamily: 'sans',
//           fontWeight: 'condensed',
//           color: 'yellow',
//         },
//         headerTitleAlign: 'center',
//         headerRight: () => (
//           <Pressable onPress={() => alert('Menu Button Pressed!')}>
//             <Text className=" text-yellow-500 font-bold">Menu</Text>
//           </Pressable>
//         ),
//         headerTitle: (props) => <LogoTitle />,
//       }}
//     >
//       <Stack.Screen name="index" />
//       <Stack.Screen
//         name="about/index"
//         options={{
//           title: 'About Page',
//         }}
//       />
//     </Stack>
//   )
// }
