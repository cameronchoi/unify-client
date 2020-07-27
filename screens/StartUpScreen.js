import React, { useContext } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import NormalText from '../components/NormalText'
import StartButton from '../components/StartButton'

import { FontAwesome5 } from '@expo/vector-icons'
import Colours from '../constants/colours'

export default function StartUpScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <View style={{ alignItems: 'center' }}>
          <FontAwesome5
            style={{ alignItems: 'center' }}
            name='user-friends'
            size={90}
            color='white'
          />
        </View>
        <NormalText style={{ color: 'white', fontSize: 70 }}>unify</NormalText>
      </View>
      <View style={styles.buttons}>
        <StartButton
          textColour={Colours.primary}
          style={styles.firstButton}
          title='Sign in'
          onPress={() => {
            navigation.navigate('SignIn')
          }}
        />
        <StartButton
          textColour='white'
          style={styles.secondButton}
          title='Sign up'
          onPress={() => {
            navigation.navigate('EmailSignUp')
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colours.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    flex: 3,
    justifyContent: 'center'
  },
  buttons: {
    flex: 1
  },
  firstButton: {
    backgroundColor: 'white'
  },
  secondButton: {
    marginTop: 20,
    backgroundColor: Colours.primary
  }
})
