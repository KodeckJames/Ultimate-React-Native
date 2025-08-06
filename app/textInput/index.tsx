import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function TextInputComponent() {
  const [username, setUsername] = useState('')

  return (
    <View>
      <Text>Enter your UserName</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
        // secureTextEntry - Use this for passwords
        keyboardType="default"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <TextInput
        style={[styles.input, styles.multilineText]}
        placeholder="Message"
        multiline
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  form: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  multilineText: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
})
