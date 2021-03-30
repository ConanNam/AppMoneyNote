import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    margin: 10,
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
  body: {
    flex: 2,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 15,
    resizeMode: 'contain',
  },
});

const Side = ({route, navigation}) => {
  const [walletName, setWalletName] = useState('Tiền mặt');
  const [totalMoney, setTotalMoney] = useState(0);
  const [isWellCome, setIsWellCome] = useState(false);

  let isdel = route.params?.isdel;

  useEffect(async () => {
    try {
      const value = await AsyncStorage.getItem('header');
      if (value !== null) {
        setIsWellCome(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (isdel === true) {
      setIsWellCome(false);
    }
  }, [isdel]);

  if (isWellCome) {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image
          source={require('./assets/icon-welcome.png')}
          style={{width: 300, height: 300, resizeMode: 'contain'}}
        />
        <Text style={{fontSize: 25}}>Chào mừng bạn trở lại!</Text>
        <View style={styles.footer}>
          <TouchableOpacity
            style={{
              backgroundColor: '#d4155b',
              width: 200,
              padding: 10,
              borderRadius: 20,
            }}
            onPress={() => {
              navigation.navigate('Home', {});
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>TIẾP TỤC</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else
    return (
      <SafeAreaView style={styles.Container}>
        <View style={{flex: 1}}>
          <View style={styles.header}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>
              Đầu tiên, hãy tạo ví
            </Text>
            <Text style={{fontSize: 15, color: '#b8b8b8', textAlign: 'center'}}>
              Money Lover giúp bạn ghi chép chi tiêu
            </Text>
          </View>
          <View style={styles.body}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={styles.image}
                source={require('./assets/wallet.png')}
              />
            </View>
            <View
              style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
              <Text style={{fontSize: 20, color: '#b8b8b8', marginTop: 20}}>
                Tên ví
              </Text>
              <TextInput
                autoFocus={true}
                defaultValue="Tiền mặt"
                style={{
                  padding: 0,
                  borderBottomColor: '#0bb34b',
                  borderBottomWidth: 0.5,
                  width: '100%',
                }}
                onChangeText={val => {
                  setWalletName(val);
                }}
              />
              <Text style={{fontSize: 20, color: '#b8b8b8', marginTop: 10}}>
                Số tiền hiện có
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <TextInput
                  autoFocus={false}
                  placeholder="0"
                  keyboardType="numeric"
                  style={{
                    padding: 0,
                    borderBottomColor: '#0bb34b',
                    borderBottomWidth: 0.5,
                    marginRight: 10,
                    width: '50%',
                  }}
                  onChangeText={val => {
                    setTotalMoney(val);
                  }}
                />
                <Text>VND</Text>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              style={{
                backgroundColor: '#a7f2d4',
                width: '70%',
                padding: 10,
                borderRadius: 20,
              }}
              onPress={() => {
                navigation.navigate('Home', {
                  name: walletName,
                  money: totalMoney,
                });
              }}>
              <Text style={{color: 'green', textAlign: 'center'}}>
                TIẾP TỤC
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
};

export default Side;
