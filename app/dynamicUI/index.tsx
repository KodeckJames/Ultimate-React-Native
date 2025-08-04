import { View, Text, useWindowDimensions } from 'react-native'

export default function DynamicUIPage() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  
  return (
    <View className=" flex-1 justify-center items-center min-h-screen bg-purple-500">
      <View
        className=" bg-blue-400 items-center justify-center"
        style={{
          width: windowWidth > 500 ? '70%' : '90%',
          height: windowHeight > 600 ? '60%' : '90%',
        }}
      >
        <Text style={{ fontSize: windowWidth > 500 ? 50 : 24 }}>
          DynamicUIPage
        </Text>
      </View>
    </View>
  )
}
