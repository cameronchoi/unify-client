import React, { useEffect, useReducer, useMemo, createContext } from 'react'

export const SignUpContext = createContext()

function reducer (prevState, action) {
  switch (action.type) {
    case 'EMAIL':
      return {
        ...prevState,
        email: action.email
      }
    case 'PASSWORD':
      return {
        ...prevState,
        password: action.password
      }
    case 'NAME':
      return {
        ...prevState,
        firstName: action.firstName,
        lastName: action.lastName
      }
    case 'UNI_NAME':
      return {
        ...prevState,
        uniName: action.uniName
      }
    case 'UNI_YEAR':
      return {
        ...prevState,
        uniYear: action.uniYear
      }
    case 'DEGREE':
      return {
        ...prevState,
        degreeId: action.degreeId,
        degreeName: action.degreeName
      }
    case 'SUBJECTS':
      return {
        ...prevState,
        subjectIds: action.subjectIds,
        subjectCodes: action.subjectCodes
      }
    case 'DESCRIBE_SELF':
      return {
        ...prevState,
        describeSelf: action.describeSelf
      }
    case 'DESCRIBE_FRIEND':
      return {
        ...prevState,
        describeFriend: action.describeFriend
      }
    case 'AVATAR':
      return {
        ...prevState,
        avatar: {
          topType: action.topType,
          hairColour: action.hairColour,
          clotheType: action.clotheType,
          skinColour: action.skinColour
        }
      }
  }
}

export const SignUpProvider = ({ children }) => {
  const [signUpState, dispatch] = useReducer(reducer, {
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    uniName: null,
    uniYear: 0,
    degreeName: null,
    degreeId: null,
    subjectIds: [],
    subjectCodes: [],
    describeSelf: null,
    describeFriend: null,
    avatar: {
      topType: null,
      hairColour: null,
      clotheType: null,
      skinColour: null
    }
  })
  return (
    <SignUpContext.Provider value={[signUpState, dispatch]}>
      {children}
    </SignUpContext.Provider>
  )
}

export default SignUpContext
