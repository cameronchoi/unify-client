import React, { useContext, useState } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'

import { AuthContext } from '../context/AuthContext'
import ProfilePicture from '../components/UI/ProfilePicture'
import MediumText from '../components/UI/MediumText'

import AvatarModal from '../components/UI/AvatarModal'

export default function ProfileScreen ({ navigation }) {
  const [state, dispatch] = useContext(AuthContext)
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <View style={styles.container}>
      <AvatarModal
        modalOpen={modalOpen}
        backHandler={() => setModalOpen(false)}
      />
      <TouchableOpacity onPress={() => setModalOpen(true)}>
        <ProfilePicture
          size='medium'
          uri='https://avataaars.io/png?topType=LongHairStraight&hairColor=Brown&clotheType=Hoodie&skinColor=Light&avatarStyle=Circle'
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
