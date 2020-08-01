import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, FlatList, View, Text, Button } from 'react-native'
import MatchMessage from '../components/UI/MatchMessage'
import MediumText from '../components/UI/MediumText'

import { AuthContext } from '../context/AuthContext'

export default function MatchesScreen ({ navigation }) {
  //   const [matches, setMatches] = useState([
  //     {
  //       name: 'Jimmy Johnson',
  //       latestMessage: 'How are you finding BUSS1020?',
  //       uri:
  //         'https://avataaars.io/png?topType=ShortHairTheCaesar&hairColor=Black&clotheType=BlazerSweater&skinColor=Pale&avatarStyle=Circle'
  //     },
  //     {
  //       name: 'Alyssa Wong',
  //       latestMessage: "You wouldn't believe what happened today...",
  //       uri:
  //         'https://avataaars.io/png?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Yellow'
  //     },
  //     {
  //       name: 'Denzel Washington',
  //       latestMessage: "I'm pulling an all nighter tonight",
  //       uri:
  //         'https://avataaars.io/png?avatarStyle=Circle&topType=ShortHairTheCaesarSidePart&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Black&graphicType=Skull&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Black'
  //     },
  //     {
  //       name: 'Timothy Lin',
  //       latestMessage: 'Dude... this video is taking me so much time',
  //       uri:
  //         'https://avataaars.io/png?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Pink&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Yellow'
  //     },

  //     {
  //       name: 'Halle Berry',
  //       latestMessage: "Why weren't you at todays lecture???",
  //       uri:
  //         'https://avataaars.io/png?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=DarkBrown'
  //     },
  //     {
  //       name: 'Cameron Choi',
  //       latestMessage: "I've been meaning to tell you something...",
  //       uri:
  //         'https://avataaars.io/png?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Tanned'
  //     },
  //     {
  //       name: 'Jennifer Lawrence',
  //       latestMessage: 'What did you get for question 8?',
  //       uri:
  //         'https://avataaars.io/png?avatarStyle=Circle&topType=LongHairFroBand&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Overall&clotheColor=Gray01&graphicType=Skull&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale'
  //     },
  //     {
  //       name: 'Robert De Niro',
  //       latestMessage: "I think that it's okay for this semester",
  //       uri:
  //         'https://avataaars.io/png?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=SilverGray&facialHairType=Blank&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
  //     },
  //     {
  //       name: 'Jackie Chan',
  //       latestMessage: 'Hiyaaaaaaaaaaa!!! Karate chop',
  //       uri:
  //         'https://avataaars.io/png?avatarStyle=Circle&topType=ShortHairShaggyMullet&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Yellow'
  //     },

  //     {
  //       name: 'Ji-eun Lee',
  //       latestMessage: 'What did you get up to today?',
  //       uri:
  //         'https://avataaars.io/png?avatarStyle=Circle&topType=LongHairBun&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale'
  //     }
  //   ])
  const [state, dispatch] = useContext(AuthContext)
  const [matches, setMatches] = useState([])

  useEffect(() => {
    fetch(
      'https://australia-southeast1-unify-40e9b.cloudfunctions.net/api/matches',
      {
        headers: {
          Authorization: `Bearer ${state.userToken}`
        }
      }
    )
      .then(res => res.json())
      .then(resData => {})
  }, [])

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
          keyExtractor={item => item.name}
          data={matches}
          renderItem={({ item }) => (
            <MatchMessage
              onPressHandler={onPressHandler}
              uri={item.uri}
              name={item.name}
              latestMessage={item.latestMessage}
            />
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
