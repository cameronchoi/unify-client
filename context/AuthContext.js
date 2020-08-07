import React, { useEffect, useReducer, useMemo, createContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";

export const AuthContext = createContext();

function reducer(prevState, action) {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        userToken: action.token,
        userEmail: action.email,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
        userEmail: action.email,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
        userEmail: null,
      };
  }
}

export function AuthProvider({ children }) {
  const initialState = {
    isLoading: true,
    isSignout: false,
    userToken: null,
    userEmail: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let token;
      try {
        // After restoring token, may need to validate it in production apps
        // This will switch to the App or Auth screen and the loading
        // screen will be unmounted and thrown away.
        token = await AsyncStorage.getItem("userToken");
        dispatch({ type: "RESTORE_TOKEN", token });
      } catch (e) {
        console.log("THE TOKEN COULD NOT BE RETRIEVED");
      }
    };
    bootstrapAsync();
  }, []);

  //   const authContext = useMemo(
  //     () => ({
  //       signIn: async data => {
  //         // In a production app, we need to send some data (usually username, password) to server and get a token
  //         // We will also need to handle errors if sign in failed
  //         // After getting token, we need to persist the token using `AsyncStorage`
  //         // In the example, we'll use a dummy token

  //         dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })
  //       },
  //       signOut: () => dispatch({ type: 'SIGN_OUT' }),
  //       signUp: async data => {
  //         // In a production app, we need to send user data to server and get a token
  //         // We will also need to handle errors if sign up failed
  //         // After getting token, we need to persist the token using `AsyncStorage`
  //         // In the example, we'll use a dummy token

  //         dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })
  //       }
  //     }),
  //     []
  //   )

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
}
