import { View, Text, Modal, Button } from 'react-native'
import React, { useState } from 'react'

export default function CustomModal() {
    const [modalVisible, setIsModalVisible] = useState(false);
  return (
    <Modal animationType='slide' presentationStyle='pageSheet' onRequestClose={()=>setIsModalVisible(false)} visible={modalVisible}>
        <View>
              <Text>CustomModal</Text>
              <Button title='Close' color={'orange'} onPress={()=>setIsModalVisible(false)}/>
        </View>
    </Modal>
  )
}