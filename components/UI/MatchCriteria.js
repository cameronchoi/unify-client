import React, { useState } from 'react'

import { View, Switch, StyleSheet } from 'react-native'
import NormalText from './NormalText'
import Colours from '../../constants/colours'

const MatchCriteria = props => {
  const toggleSwitch = () => {
    props.setIsEnabled(previousState => !previousState)
  }
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <NormalText style={props.textStyle}>{props.title}</NormalText>
      </View>
      <View>
        <Switch
          trackColor={{ true: Colours.primary, false: 'grey' }}
          switchStyle={props.switchStyle}
          onValueChange={toggleSwitch}
          value={props.isEnabled}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default MatchCriteria
