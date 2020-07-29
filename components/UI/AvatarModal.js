import React, { useState } from 'react'
import { View, StyleSheet, Modal, TouchableOpacity } from 'react-native'

import NormalText from './NormalText'
import ProfilePicture from './ProfilePicture'
import TopTypePicker from './TopTypePicker'
import HairColourPicker from './HairColourPicker'
import ClotheTypePicker from './ClotheTypePicker'
import SkinColourPicker from './SkinColourPicker'
import SubmitButton from './SubmitButton'

import { Entypo } from '@expo/vector-icons'

const AvatarModal = ({
  modalOpen,
  backHandler,
  saveHandler,
  currentTopType,
  currentHairColour,
  currentClotheType,
  currentSkinColour
}) => {
  const [topType, setTopType] = useState(currentTopType)
  const [hairColour, setHairColour] = useState(currentHairColour)
  const [clotheType, setClotheType] = useState(currentClotheType)
  const [skinColour, setSkinColour] = useState(currentSkinColour)
  return (
    <Modal visible={modalOpen} animationType='slide'>
      <TouchableOpacity
        onPress={backHandler}
        style={{ marginTop: 50, marginLeft: 10, width: 30 }}
      >
        <Entypo name='cross' size={35} color='black' />
      </TouchableOpacity>
      <View style={{ marginBottom: 25, alignItems: 'center' }}>
        <ProfilePicture
          size='medium'
          uri={`https://avataaars.io/png?topType=${topType}&hairColor=${hairColour}&clotheType=${clotheType}&skinColor=${skinColour}&avatarStyle=Circle`}
        />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.rowContainer}>
          <NormalText style={{ fontSize: 15 }}>Select a top type</NormalText>
          <TopTypePicker topType={topType} setTopType={setTopType} />
        </View>
        <View style={styles.rowContainer}>
          <NormalText style={{ fontSize: 15 }}>Select a hair colour</NormalText>
          <HairColourPicker
            hairColour={hairColour}
            setHairColour={setHairColour}
          />
        </View>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.rowContainer}>
          <NormalText style={{ fontSize: 15 }}>
            Select a clothing type
          </NormalText>
          <ClotheTypePicker
            clotheType={clotheType}
            setClotheType={setClotheType}
          />
        </View>
        <View style={styles.rowContainer}>
          <NormalText style={{ fontSize: 15 }}>Select a skin colour</NormalText>
          <SkinColourPicker
            skinColour={skinColour}
            setSkinColour={setSkinColour}
          />
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <SubmitButton
          onPress={() => {
            saveHandler(topType, hairColour, clotheType, skinColour)
            backHandler()
          }}
        >
          Save avatar
        </SubmitButton>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center'
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 130
  },
  rowContainer: {
    flex: 1,
    alignItems: 'center'
  }
})

export default AvatarModal
