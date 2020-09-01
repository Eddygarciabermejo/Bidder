import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../screens/';
import {BootomNavigator} from './bootomNavigator';
import {Register} from '../screens/';
import {customHeader} from '../components';


const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="App"
          component={BootomNavigator}
          options={{headerShown: false}}
          
          
          // {({route}) => {
          //   console.log('!@# options', {route});
          //   const routeName = route.state
          //     ? route.state.routes[route.state.index].name
          //     : 'Feed';
          //   return {headerTitle: routeName};
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
