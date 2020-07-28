import React, { useState } from 'react'
import { StyleSheet, FlatList, View, Text, Button } from 'react-native'
import MatchMessage from '../components/UI/MatchMessage'
import MediumText from '../components/UI/MediumText'

export default function MatchesScreen ({ navigation }) {
  const [matches, setMatches] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  //   const [matches, setMatches] = useState([])

  const onPressHandler = () => {
    navigation.navigate('Messaging')
  }

  return (
    <View style={{ flex: 1 }}>
      {matches.length === 0 ? (
        <View style={styles.container}>
          <MediumText style={{ color: 'black', fontSize: 20, margin: 10 }}>
            No matches yet...
          </MediumText>

          <MediumText style={{ color: 'black', fontSize: 15, margin: 30 }}>
            Go to the home screen to find a match!
          </MediumText>
        </View>
      ) : (
        <FlatList
          keyExtractor={item => item.toString()}
          data={matches}
          renderItem={({ item }) => (
            <MatchMessage onPressHandler={onPressHandler} />
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
