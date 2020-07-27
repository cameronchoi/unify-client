import * as React from 'react'
import { TextInput, StyleSheet } from 'react-native'

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
    fontFamily: 'Montserrat_400Regular'
  }
})

export default Input
