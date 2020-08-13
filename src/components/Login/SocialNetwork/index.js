import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const SocialNetWork = ({icon, label}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(171, 180, 189, 0.65)',
    borderRadius: 4,
    backgroundColor: '#fff',
    shadowColor: 'rgba(18, 189, 164, 0.2)',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
});
