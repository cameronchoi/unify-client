import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper'
import Colour from '../constants/colours'

export default function SubmitButton (props) {
  return (
    <View style={{ ...props.style, ...styles.button }}>
      <Button
        {...props}
        mode='contained'
        uppercase={false}
        color={Colour.primary}
        style={styles.radius}
        labelStyle={styles.text}
      >
        {props.children}
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '70%'
  },
  radius: {
    borderRadius: 12
  },
  text: {
    fontSize: 20,
    fontFamily: 'Montserrat_400Regular'
  }
})
