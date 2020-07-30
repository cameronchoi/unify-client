import React, { useState } from 'react'
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Keyboard
} from 'react-native'
import MediumText from './MediumText'
import StartButton from './StartButton'

import MultiLineInput from './MultiLineInput'

import { Entypo } from '@expo/vector-icons'

const ReportModal = ({ modalOpen, backHandler }) => {
  const [text, setText] = useState('')
  return (
    <Modal visible={modalOpen} animationType='slide'>
      <TouchableOpacity
        onPress={() => {
          backHandler()
          setText('')
        }}
        style={{ marginTop: 50, marginLeft: 10, width: 30 }}
      >
        <Entypo name='cross' size={35} color='black' />
      </TouchableOpacity>
      <View style={styles.modalContainer}>
        <MediumText style={{ fontSize: 18 }}>
          What would you like to report the user for?
        </MediumText>
        <MultiLineInput
          onChangeText={text => setText(text)}
          value={text}
          style={styles.input}
        />
        <StartButton
          onPress={() => {
            Alert.alert(
              'Report has been sent',
              '',
              [{ text: 'OK', onPress: () => backHandler() }],
              { cancelable: false }
            )
            setText('')
            Keyboard.dismiss()
          }}
          title='Report User'
          style={{ backgroundColor: 'red' }}
          textColour='white'
        />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10
  },
  input: {
    marginVertical: 30
  }
})

export default ReportModal
