import * as React from 'react'
import { TextInput, StyleSheet } from 'react-native'

import Fonts from '../../constants/fonts'

const Input = props => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />
}

const styles = StyleSheet.create({
  input: {
    width: '85%',
    height: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: Fonts.normal
  }
})

export default Input
