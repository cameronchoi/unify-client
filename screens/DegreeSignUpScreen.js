import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import SubmitButton from '../components/UI/SubmitButton';
import AutocompleteInput from '../components/UI/AutocompleteInput';
import MediumText from '../components/UI/MediumText';
import BackArrow from '../components/UI/BackArrow';

import { SignUpContext } from '../context/SignUpContext';

export default function DegreeSignUpScreen({ navigation }) {
  const [degrees, setDegrees] = useState([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [signUpState, dispatch] = useContext(SignUpContext);

  useEffect(() => {
    const getDegrees = async () => {
      try {
        let res = await fetch(
          `https://australia-southeast1-unify-40e9b.cloudfunctions.net/api/degrees?uniName=${signUpState.uniName}`
        );
        data = await res.json();
        if (data.error) {
          alert(data.error);
        } else {
          setDegrees(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getDegrees();
  }, []);

  const validateDegree = () => {
    for (let i = 0; i < degrees.length; i++) {
      if (degrees[i].degreeName == text) {
        dispatch({ type: 'DEGREE', degreeName: text, degreeId: degrees[i].id });
        return navigation.navigate('SubjectSignUp');
      }
    }
    alert(`Not a valid degree name for ${signUpState.uniName}.`);
  };

  return (
    <View>
      <BackArrow
        onPress={() => {
          navigation.goBack();
        }}
      />
      <MediumText style={styles.title}>My degree is...</MediumText>
      <View style={{ alignItems: 'center' }}>
        <AutocompleteInput
          data={degrees.map((degree) => degree.degreeName)}
          onChangeText={setText}
          value={text}
          placeholder='Degree Name'
          style={styles.test}
        />
        <SubmitButton loading={loading} onPress={validateDegree}>
          Continue
        </SubmitButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, marginLeft: 30, marginTop: 20 },
  test: {
    marginTop: 40,
    marginBottom: 70,
  },
});
