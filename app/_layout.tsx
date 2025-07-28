import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" translucent />
      <GestureHandlerRootView className=" flex-1">
        <Drawer screenOptions={{
          headerStyle: {
            backgroundColor:"purple"
          },
          headerTintColor: "yellow",
          drawerStyle: {
            backgroundColor:"purple"
          },
          drawerActiveTintColor: "yellow",
          drawerInactiveTintColor: "white",
          drawerActiveBackgroundColor: "red",
          drawerInactiveBackgroundColor:"purple",
          
        }}>
          <Drawer.Screen
            name="index"
            options={{
              title: 'Home Title',
              drawerLabel: 'Home',
              drawerIcon: ({color}) => <FontAwesome name="home" size={24} color={color} />,
            }}
          />
          <Drawer.Screen
            name="dashboard"
            options={{
              title: 'Dashboard',
              drawerLabel: 'Dashboard',
              drawerIcon:({color})=><FontAwesome name='dashboard' size={24} color={color}/>
            }}
          />
          <Drawer.Screen
            name="settings"
            options={{
              title: 'Settings',
              drawerLabel: 'Settings',
              drawerIcon:({color})=><FontAwesome name='cog' size={24} color={color}/>
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </>
  )
}
