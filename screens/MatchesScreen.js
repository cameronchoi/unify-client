import React, { useState, useEffect, useContext } from 'react'
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Button,
  ActivityIndicator
} from 'react-native'
import MatchMessage from '../components/UI/MatchMessage'
import MediumText from '../components/UI/MediumText'

import { AuthContext } from '../context/AuthContext'
import { MatchContext } from '../context/MatchContext'

export default function MatchesScreen ({ navigation }) {
  const [state, dispatch] = useContext(AuthContext)
  const [matches, setMatches] = useState([])
  const [loading, setLoading] = useState(false)
  const [matchState, matchDispatch] = useContext(MatchContext)

  useEffect(() => {
    setLoading(true)
    fetch(
      'https://australia-southeast1-unify-40e9b.cloudfunctions.net/api/matches',
      {
        headers: {
          Authorization: `Bearer ${state.userToken}`
        }
      }
    )
      .then(res => res.json())
      .then(resData => {
        setMatches(resData.results)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  const renderItemHandler = ({ item }) => {
    let matchInfo
    if (item.match.userInfo.userOne.email !== state.userEmail) {
      matchInfo = item.match.userInfo.userOne
    } else {
      matchInfo = item.match.userInfo.userTwo
    }
    const uri = `https://avataaars.io/png?topType=${matchInfo.avatar.topType}&hairColor=${matchInfo.avatar.hairColour}&clotheType=${matchInfo.avatar.clotheType}&skinColor=${matchInfo.avatar.skinColour}&avatarStyle=Circle`
    const fullName = `${matchInfo.firstName} ${matchInfo.lastName}`
    return (
      <MatchMessage
        id={item.key}
        onPressHandler={onPressHandler}
        uri={uri}
        name={fullName}
        email={matchInfo.email}
        fullName={fullName}
        latestMessage={item.match.latestMessage}
      />
    )
  }

  const onPressHandler = (email, fullName, uri, id) => {
    matchDispatch({ type: 'SET_MATCH', email, fullName, uri, id })
    navigation.navigate('Messaging')
  }

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    )
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
        <FlatList data={matches} renderItem={renderItemHandler} />
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
