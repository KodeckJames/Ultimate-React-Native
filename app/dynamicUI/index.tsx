import { View, Text, Dimensions } from 'react-native'
import { useState, useEffect } from 'react'

export default function DynamicUIPage() {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get('window'),
  })

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions({ window })
    })
    return () => subscription?.remove()
  })

  const { window } = dimensions
  const windowWidth = window.width
  const windowHeight = window.height

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
