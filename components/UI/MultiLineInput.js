import * as React from 'react'
import { TextInput, StyleSheet } from 'react-native'

import Fonts from '../../constants/fonts'

const MultiLineInput = props => {
  return (
    <TextInput
      {...props}
      style={{ ...styles.input, ...props.style }}
      multiline={true}
      numberOfLines={4}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    width: '85%',
    height: 150,
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 14,
    fontFamily: Fonts.normal
  }
})

export default MultiLineInput
