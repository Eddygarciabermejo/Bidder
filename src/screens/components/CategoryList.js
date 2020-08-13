import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Item from './Category'
import imgGeriatry from '../../assets/images/geriatry.jpg';
import imgPediatric from '../../assets/images/pediatric.jpg';
import imgCritical from '../../assets/images/critical_care.jpg';

export default class CategoryList extends Component {
  render(){
        return (
          <FlatList
            data={this.props.list}
            renderItem={({ item }) => <Item {...item}/>}
            keyExtractor={item => item._id}
            horizontal={true}
          />
    );
  }
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