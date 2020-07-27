import React, { useState } from 'react'
import { StyleSheet, FlatList, Text, Button } from 'react-native'
import MatchMessage from '../components/UI/MatchMessage'

export default function MatchesScreen ({ navigation }) {
  const [matches, setMatches] = useState([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
  ])

  const onPressHandler = () => {
    navigation.navigate('Messaging')
  }

  return (
    <FlatList
      keyExtractor={item => item.toString()}
      data={matches}
      renderItem={({ item }) => (
        <MatchMessage onPressHandler={onPressHandler} />
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})
