import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import TopTabNavigation from './TopTabNavigation';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

const ChoseExpenses = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{paddingLeft: 10}}>
          <MaterialIcon name="arrow-back" size={22} />
        </TouchableOpacity>
        <Text style={{marginLeft: 20}}>Chọn nhóm</Text>
      </View>
      <TopTabNavigation />
    </View>
  );
};

export default ChoseExpenses;
