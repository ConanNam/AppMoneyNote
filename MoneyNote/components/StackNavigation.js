import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import Side from './Side';
import Home from './Home';
import AddBill from './AddBill';
import ChoseExpenses from './ChoseExpenses';
import App from '../App';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Side">
        <Stack.Screen name="Side" component={Side} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddBill" component={AddBill} />
        <Stack.Screen name="ChoseExpenses" component={ChoseExpenses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
