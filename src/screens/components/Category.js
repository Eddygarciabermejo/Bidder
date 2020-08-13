import React, {useState, setState} from 'react';
import {StyleSheet, ImageBackground, Text, View, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native';


const Category = (props) => {
  navigation = useNavigation();


  return(
  <TouchableOpacity onPress = {() => navigation.navigate('Details', props)} style={styles.wrapper}>
    <Text  style={styles.title}>{props.name}</Text>

  </TouchableOpacity>
);
}


const styles = StyleSheet.create({
  title: {
        color:'#59709F',
        fontSize: 40,
        fontWeight:'bold',
        textShadowColor: 'rgba(255,255,255, .75)',
        textShadowOffset: {
            width: 2,
            height: 2
        },
        textShadowRadius: 0,
  },
  wrapper:{
    width: 250,
    height:100,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    margin:10
},
});

export default Category;