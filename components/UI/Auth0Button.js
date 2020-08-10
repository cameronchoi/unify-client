import React, { useEffect } from 'react';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Platform, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Colours from '../../constants/colours';
import Fonts from '../../constants/fonts';

const auth0ClientId = 'Qub71wocUrPFhZUT11JOfdAIVhabzKWv';
const authorizationEndpoint = 'https://unify.au.auth0.com/authorize';

// creates proxy redirectUri for native app (uses window.location when on web)
const useProxy = Platform.select({ web: false, default: true });
const redirectUri = makeRedirectUri({ useProxy, native: 'unify://' });

const Auth0Button = ({ onPressSideEffects, onResponse, ...props }) => {
  const config = {
    redirectUri,
    clientId: auth0ClientId,
    responseType: 'id_token',
    scopes: ['openid', 'sub', 'profile', 'email'],
    extraParams: {
      nonce: 'nonce',
    },
  };

  // response filled after prompt method completes
  const [request, response, promptAsync] = useAuthRequest(config, {
    authorizationEndpoint,
  });

  useEffect(() => {
    onResponse(response);
  }, [response]);

  return (
    <TouchableOpacity
      disabled={!request}
      onPress={() => {
        onPressSideEffects();
        promptAsync({ useProxy });
      }}
      style={{ ...styles.button, ...props }}
    >
      <Text style={styles.text}>Sign in with Google or Facebook</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 300,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    backgroundColor: Colours.secondary,
  },
  text: {
    fontSize: 15,
    fontFamily: Fonts.normal,
    color: 'white',
  },
});

export default Auth0Button;
