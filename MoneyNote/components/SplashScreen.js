import React from 'react';
import {SafeAreaView, View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

const SplashScreen = () => {
  return (
    <View style={styles.Container}>
      <Image
        style={styles.image}
        source={require('./assets/moneylover-logo.png')}
      />
    </View>
  );
};

export default SplashScreen;
