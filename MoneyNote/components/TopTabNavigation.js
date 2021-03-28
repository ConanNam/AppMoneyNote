import React from 'react';
import {View, Text, Image, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Expenses from './Expenses';
import CollectionOfMoney from './CollectionOfMoney';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const MyTab = () => {
  return (
    <Tab.Navigator initialRouteName="Expenses">
      <Tab.Screen
        name="Expenses"
        component={Expenses}
        options={{title: 'KHOẢN CHI'}}
      />
      <Tab.Screen
        name="CollectionOfMoney"
        component={CollectionOfMoney}
        options={{title: 'KHOẢN THU'}}
      />
    </Tab.Navigator>
  );
};

const TopTabNavigation = () => {
  return <MyTab />;
};

export default TopTabNavigation;
