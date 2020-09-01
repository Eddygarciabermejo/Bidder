import * as React from 'react';
import {StyleSheet, ImageBackground, Text} from 'react-native'


const Blog = (props) => (
  <ImageBackground style={styles.wrapper} source={props.img}>
    <Text style={styles.title}>{props.title}</Text>


  </ImageBackground>
);


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
    width: 300,
    height:300,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    margin:10
},
});

export default Blog;