import * as React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { Button } from 'react-native-paper'
import Colour from '../../constants/colours'

import Fonts from '../../constants/fonts'

export default function SubmitButton (props) {
  if (props.loading) {
    return <ActivityIndicator size='small' />
  }
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
    fontFamily: Fonts.normal
  }
})
