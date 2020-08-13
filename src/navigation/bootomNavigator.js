import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createMaterialBottomTabNavigator();

export const BootomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={Home} options={{
        tabBarLabel: 'Inicio',
        tabBarIcon:({color}) => (
          <MaterialCommunityIcons name="home" color={color} size={26}/>
        )
      }} />
      <Tab.Screen name="Búsqueda" component={Home} options={{
        tabBarLabel: 'Búsqueda',
        tabBarIcon:({color}) => (
          <MaterialCommunityIcons name="magnify" color={color} size={26}/>
        )
      }}/>
      <Tab.Screen name="Perfil" component={Home} options={{
        tabBarLabel: 'Perfil',
        tabBarIcon:({color}) => (
          <MaterialCommunityIcons name="account" color={color} size={26}/>
        )
      }}/>
    </Tab.Navigator>
  );
};
