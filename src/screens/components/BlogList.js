import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Item from './Blog'
import imgInjury from '../../assets/images/injury.jpg';
import imgPreventive from '../../assets/images/preventive.jpg';
import imgCarry from '../../assets/images/carry.jpg';



export default function BlogList() {
    const data = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Curando una herida',
          img: imgInjury
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Atenciones preventivas',
          img: imgPreventive
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Como cargar a los pacientes',
          img: imgCarry
        },
      ];
    return (
          <FlatList
            data={data}
            renderItem={({ item }) => <Item title={item.title} img={item.img} />}
            keyExtractor={item => item.id}
            horizontal={true}
          />

    );
  }
  

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});