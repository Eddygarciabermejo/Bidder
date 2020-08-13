import * as React from 'react';
import { Searchbar } from 'react-native-paper';

import {StyleSheet} from 'react-native'

export default class Search extends React.Component {
  state = {
    searchQuery: '',
  };

  _onChangeSearch = query => this.setState({ searchQuery: query });

  render() {
    const { searchQuery } = this.state;
    return (
      <Searchbar
        placeholder={this.props.placeholder}
        onChangeText={this._onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
    );
  }
}

const styles = StyleSheet.create({
  searchBar:{
    borderRadius:10,
    marginLeft: 10,
    marginRight: 10
  }
})