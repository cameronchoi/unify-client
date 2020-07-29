import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import SubmitButton from '../components/UI/SubmitButton'
import ProfilePicture from '../components/UI/ProfilePicture'
import MediumText from '../components/UI/MediumText'
import BackArrow from '../components/UI/BackArrow'
import AvatarModal from '../components/UI/AvatarModal'

import { SignUpContext } from '../context/SignUpContext'

export default function AvatarSignUpScreen ({ navigation }) {
  const [state, dispatch] = useContext(SignUpContext)
  const [modalOpen, setModalOpen] = useState(false)

  const [topType, setTopType] = useState('LongHairStraight')
  const [hairColour, setHairColour] = useState('Brown')
  const [clotheType, setClotheType] = useState('Hoodie')
  const [skinColour, setSkinColour] = useState('Light')
  return (
    <View>
      <AvatarModal
        currentTopType={topType}
        currentHairColour={hairColour}
        currentClotheType={clotheType}
        currentSkinColour={skinColour}
        saveHandler={(topType, hairColour, clotheType, skinColour) => {
          setTopType(topType)
          setHairColour(hairColour)
          setClotheType(clotheType)
          setSkinColour(skinColour)
        }}
        modalOpen={modalOpen}
        backHandler={() => setModalOpen(false)}
      />
      <BackArrow
        onPress={() => {
          navigation.goBack()
        }}
      />
      <MediumText style={styles.title}>Customise your avatar!</MediumText>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={styles.test}
          onPress={() => setModalOpen(true)}
        >
          <ProfilePicture
            size='medium'
            uri={`https://avataaars.io/png?topType=${topType}&hairColor=${hairColour}&clotheType=${clotheType}&skinColor=${skinColour}&avatarStyle=Circle`}
          />
        </TouchableOpacity>
        <SubmitButton
          onPress={() => {
            dispatch({
              type: 'AVATAR',
              topType: topType,
              hairColour: hairColour,
              clotheType: clotheType,
              skinColour: skinColour
            })
            console.log(state)
            navigation.navigate('Welcome')
          }}
        >
          Continue
        </SubmitButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: { fontSize: 20, marginLeft: 30, marginTop: 20 },
  test: {
    marginTop: 20,
    marginBottom: 70
  }
})
