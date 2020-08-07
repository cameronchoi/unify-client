import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import SubmitButton from '../components/UI/SubmitButton';
import AutocompleteInput from '../components/UI/AutocompleteInput';
import MediumText from '../components/UI/MediumText';
import BackArrow from '../components/UI/BackArrow';
import Colour from '../constants/colours';

import { SignUpContext } from '../context/SignUpContext';

export default function SubjectSignUpScreen({ navigation }) {
  const [signUpState, dispatch] = useContext(SignUpContext);
  const [text, setText] = useState('');
  const [allSubjects, setAllSubjects] = useState([]);
  const [subjectCodes, setSubjectCodes] = useState([]);
  const [subjectIds, setSubjectIds] = useState([]);

  useEffect(() => {
    const getSubjects = async () => {
      try {
        let res = await fetch(
          `https://australia-southeast1-unify-40e9b.cloudfunctions.net/api/subjects?uniName=${signUpState.uniName}`
        );
        const data = await res.json();
        if (data.error) {
          alert(data.error);
        } else {
          setAllSubjects(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getSubjects();
  }, []);

  const addSubject = () => {
    for (let i = 0; i < allSubjects.length; i++) {
      if (allSubjects[i].subjectCode === text) {
        if (subjectCodes.includes(text)) {
          return alert('Subject has already been added.');
        }
        setSubjectCodes([...subjectCodes, text]);
        setSubjectIds([...subjectIds, allSubjects[i].id]);
        return setText('');
      }
    }
    alert(`Not a valid subject name for ${signUpState.uniName}.`);
  };

  const removeSubject = (subjectCode) => {
    const subject = allSubjects.find(
      (subject) => subject.subjectCode === subjectCode
    );
    setSubjectCodes(subjectCodes.filter((code) => code !== subjectCode));
    setSubjectIds(subjectIds.filter((id) => id !== subject.id));
  };

  return (
    <View>
      <BackArrow
        onPress={() => {
          navigation.goBack();
        }}
      />
      <MediumText style={styles.title}>My current subjects are...</MediumText>
      <View style={styles.inputContainer}>
        <View style={{ flex: 4 }}>
          <AutocompleteInput
            autoFocus={true}
            data={allSubjects.map((subject) => subject.subjectCode)}
            onChangeText={(text) => setText(text.toUpperCase())}
            value={text}
            placeholder='Subject Code'
            onSubmitEditing={addSubject}
            style={styles.test}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TouchableOpacity style={styles.addButton} onPress={addSubject}>
            <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <FlatList
          numColumns={2}
          keyExtractor={(item, i) => i.toString()}
          data={subjectCodes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.subjectText}
              onPress={() => removeSubject(item)}
            >
              <Text style={{ flex: 5 }}>{item}</Text>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>×</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <SubmitButton
          style={styles.subjectButton}
          onPress={() => {
            dispatch({
              type: 'SUBJECTS',
              subjectCodes,
              subjectIds,
            });
            navigation.navigate('PersonalSignUp');
          }}
        >
          Continue
        </SubmitButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, marginLeft: 30, marginTop: 20 },
  inputContainer: {
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'row',
    zIndex: 1,
  },
  test: {
    width: '100%',
    marginTop: 40,
    marginBottom: 35,
  },
  addButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: Colour.primary,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subjectButton: {
    marginTop: 35,
  },
  subjectText: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 3,
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 30,
    width: 100,
  },
});
