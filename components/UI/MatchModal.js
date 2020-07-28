import React from 'react'
import { View, StyleSheet, Modal } from 'react-native'

import NormalText from './NormalText'
import MediumText from './MediumText'
import StartButton from './StartButton'
import ProfilePicture from './ProfilePicture'

import Colours from '../../constants/colours'

const MatchModal = ({ modalOpen, sendMessageHandler, backHandler }) => {
  return (
    <Modal visible={modalOpen} animationType='slide' transparent={true}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          opacity: 0.93
        }}
      >
        <NormalText
          style={{ fontSize: 20, color: 'white', marginVertical: 20 }}
        >
          You have matched with...
        </NormalText>
        <ProfilePicture
          size='medium'
          uri='https://avataaars.io/png?topType=LongHairStraight&hairColor=Brown&clotheType=Hoodie&skinColor=Light&avatarStyle=Circle'
        />
        <MediumText
          style={{ fontSize: 20, color: 'white', marginVertical: 20 }}
        >
          Bob Smith
        </MediumText>
        <StartButton
          textColour='white'
          style={styles.firstButton}
          title='Send them a message'
          onPress={sendMessageHandler}
        />
        <StartButton
          textColour={Colours.primary}
          style={styles.secondButton}
          title='Go back to home screen'
          onPress={backHandler}
        />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  firstButton: {
    backgroundColor: Colours.primary,
    marginVertical: 20
  },
  secondButton: {
    borderColor: Colours.primary,
    borderWidth: 1,
    marginVertical: 20
  }
})

export default MatchModal
