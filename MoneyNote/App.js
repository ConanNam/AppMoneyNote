/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ChoseExpenses from './components/ChoseExpenses';
import Home from './components/Home';
import Side from './components/Side';
import SplashScreen from './components/SplashScreen';
import StackNavigator from './components/StackNavigation';

const getData = async key => {
  try {
    const result = await AsyncStorage.getItem(key);
    if (result !== null) {
      return result;
    } else return null;
  } catch (e) {
    // error reading value
  }
};

const Check = React.createContext();
const App = () => {
  const [splashScreen, SetSplashScreen] = useState(true);
  setTimeout(() => {
    SetSplashScreen(false);
  }, 3000);

  return (
    <>
      {splashScreen === true ? (
        <SplashScreen />
      ) : (
        <SafeAreaView style={styles.Container}>
          <StatusBar barStyle="dark-content" backgroundColor="white" />
          <StackNavigator />
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({Container: {flex: 1}});

export default App;
