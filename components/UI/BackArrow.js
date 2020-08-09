import React from 'react';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const BackArrow = (props) => {
  return (
    <AntDesign
      style={styles.arrow}
      name='arrowleft'
      size={40}
      color='black'
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  arrow: {
    marginLeft: 25,
    marginTop: 45,
  },
});

export default BackArrow;
