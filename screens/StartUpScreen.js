import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import jwtDecode from 'jwt-decode';
import NormalText from '../components/UI/NormalText';
import StartButton from '../components/UI/StartButton';
import Auth0Button from '../components/UI/Auth0Button';
import { SignUpContext } from '../context/SignUpContext';
import { AuthContext } from '../context/AuthContext';

import { FontAwesome5 } from '@expo/vector-icons';
import Colours from '../constants/colours';

export default function StartUpScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [authState, authDispatch] = useContext(AuthContext);
  const [signUpState, signUpDispatch] = useContext(SignUpContext);

  const oAuthSignIn = async (jwtToken) => {
    try {
      const { sub, given_name, family_name, email } = jwtDecode(jwtToken);
      const res = await fetch(
        'https://australia-southeast1-unify-40e9b.cloudfunctions.net/api/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password: sub,
          }),
        }
      );
      const resData = await res.json();
      setLoading(false);
      if (!resData.token) {
        // Redirect to signup
        signUpDispatch({ type: 'EMAIL', email });
        signUpDispatch({ type: 'PASSWORD', password: sub });
        signUpDispatch({
          type: 'NAME',
          firstName: given_name,
          lastName: family_name,
        });
        navigation.navigate('UniNameSignUp');
      } else {
        authDispatch({
          type: 'SIGN_IN',
          token: resData.token,
          email: resData.email,
        });
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const onAuth0Response = (response) => {
    if (response) {
      if (response.error) {
        alert(
          'Authentication error',
          response.params.error_description || 'something went wrong'
        );
      } else if (response.type === 'success') {
        const jwtToken = response.params.id_token;
        oAuthSignIn(jwtToken);
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {loading && (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <ActivityIndicator size='large' />
        </View>
      )}
      <View style={loading ? { display: 'none' } : styles.container}>
        <View style={styles.logo}>
          <View style={{ alignItems: 'center' }}>
            <FontAwesome5
              style={{ alignItems: 'center' }}
              name='user-friends'
              size={90}
              color='white'
            />
          </View>
          <NormalText style={{ color: 'white', fontSize: 70 }}>
            unify
          </NormalText>
        </View>
        <View style={styles.buttons}>
          <Auth0Button
            onPressSideEffects={() => setLoading(true)}
            onResponse={onAuth0Response}
          />
          <StartButton
            textColour={Colours.primary}
            style={styles.signInButton}
            title='Sign in'
            onPress={() => {
              navigation.navigate('SignIn');
            }}
          />
          <StartButton
            textColour='white'
            style={styles.signUpButton}
            title='Sign up'
            onPress={() => {
              navigation.navigate('EmailSignUp');
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colours.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 3,
    justifyContent: 'center',
  },
  buttons: {
    flex: 1,
  },
  signInButton: {
    marginTop: 20,
    backgroundColor: 'white',
  },
  signUpButton: {
    marginTop: 20,
    backgroundColor: Colours.primary,
  },
});
