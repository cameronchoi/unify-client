import React, { useState } from 'react'

import { View, Switch, StyleSheet } from 'react-native'
import NormalText from './NormalText'

const MatchCriteria = props => {
  const [isEnabled, setIsEnabled] = useState(true)
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
  }
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <View
        style={{ flex: 1, justifyContent: 'flex-start', marginHorizontal: 37 }}
      >
        <NormalText style={props.textStyle}>{props.title}</NormalText>
      </View>
      <View style={{ marginRight: 37 }}>
        <Switch
          switchStyle={props.switchStyle}
          onValueChange={toggleSwitch}
          value={isEnabled}
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
