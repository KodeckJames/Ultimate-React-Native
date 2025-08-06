import { View, Text, Switch, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function SwitchComponent() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <View style={styles.switchContainer}>
      <Text>Dark Mode</Text>
      <Switch
        value={isDarkMode}
        onValueChange={() => setIsDarkMode((previousState) => !previousState)}
        trackColor={{ false: '#767577', true: 'purple' }}
        thumbColor="orange"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
})
