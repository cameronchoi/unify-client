import React from 'react'
import Colour from '../constants/colours'
import NormalText from './NormalText'

import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const StartButton = props => {
  return (
    <TouchableOpacity {...props} style={{ ...props.style, ...styles.button }}>
      <NormalText style={{ fontSize: 20, color: props.textColour }}>
        {props.title}
      </NormalText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10
  },
  text: {
    fontSize: 20,
    fontFamily: 'Montserrat_400Regular'
  }
})

export default StartButton
