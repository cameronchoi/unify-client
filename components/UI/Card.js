import React from 'react'

import { View, StyleSheet } from 'react-native'
import Colours from '../../constants/colours'

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  )
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 8,
    backgroundColor: Colours.primary,
    padding: 20,
    borderRadius: 30
  }
})

export default Card
