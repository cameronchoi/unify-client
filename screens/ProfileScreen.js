import React, { useContext, useState } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'

import { AuthContext } from '../context/AuthContext'
import ProfilePicture from '../components/UI/ProfilePicture'
import MediumText from '../components/UI/MediumText'

import AvatarModal from '../components/UI/AvatarModal'

export default function ProfileScreen ({ navigation }) {
  const [state, dispatch] = useContext(AuthContext)
  const [modalOpen, setModalOpen] = useState(false)
  const [topType, setTopType] = useState('LongHairStraight')
  const [hairColour, setHairColour] = useState('Brown')
  const [clotheType, setClotheType] = useState('Hoodie')
  const [skinColour, setSkinColour] = useState('Light')
  return (
    <View style={styles.container}>
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
      <TouchableOpacity onPress={() => setModalOpen(true)}>
        <ProfilePicture
          size='medium'
          uri={`https://avataaars.io/png?topType=${topType}&hairColor=${hairColour}&clotheType=${clotheType}&skinColor=${skinColour}&avatarStyle=Circle`}
        />
      </TouchableOpacity>
      <MediumText style={{ fontSize: 20, marginTop: 20 }}>
        Michelle Smith
      </MediumText>
      <Button
        title='Sign Out'
        onPress={() => {
          dispatch({ type: 'SIGN_OUT' })
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
