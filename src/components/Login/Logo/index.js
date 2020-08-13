import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

export const Logo = ({appName}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/logo.png')} />
      <Text style={styles.appName}>{appName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginTop: 60, alignItems: 'center', justifyContent: 'center'},
  appName: {
    marginTop: 10,
    marginBottom:10,
    fontSize: 22,
    fontWeight: '500',
    fontFamily: 'Avenir Next',
    color: '#1D2029',
  },
});
