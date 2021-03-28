import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
  SectionList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  monneySpend: {
    color: 'red',
    textAlign: 'center',
    marginTop: 5,
  },
  total: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 20,
  },
  Containerplus: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    flex: 1,
    width: '100%',
    padding: 5,
  },
  plus: {
    backgroundColor: '#06c94e',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image2: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    // marginRight: 20,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
});

var newArr = [];

const getImage = nameImg => {
  switch (nameImg) {
    case 'orange-juice':
      return (
        <Image
          source={require('./assets/orange-juice.png')}
          style={styles.image2}
        />
      );
      break;
    case 'car':
      return (
        <Image source={require('./assets/car.png')} style={styles.image2} />
      );
      break;
    case 'game-console':
      return (
        <Image
          source={require('./assets/game-console.png')}
          style={styles.image2}
        />
      );
      break;
    case 'house':
      return (
        <Image source={require('./assets/house.png')} style={styles.image2} />
      );
      break;
    case 'insurance':
      return (
        <Image
          source={require('./assets/insurance.png')}
          style={styles.image2}
        />
      );
      break;
    case 'gift-box':
      return (
        <Image
          source={require('./assets/gift-box.png')}
          style={styles.image2}
        />
      );
      break;
    case 'university':
      return (
        <Image
          source={require('./assets/university.png')}
          style={styles.image2}
        />
      );
      break;
    case 'heartbeat':
      return (
        <Image
          source={require('./assets/heartbeat.png')}
          style={styles.image2}
        />
      );
      break;
    case 'invoice':
      return (
        <Image source={require('./assets/invoice.png')} style={styles.image2} />
      );
      break;
    case 'like':
      return (
        <Image source={require('./assets/like.png')} style={styles.image2} />
      );
      break;
    case 'shop':
      return (
        <Image source={require('./assets/shop.png')} style={styles.image2} />
      );
      break;
    case 'analytics':
      return (
        <Image
          source={require('./assets/analytics.png')}
          style={styles.image2}
        />
      );
      break;
    case 'present-box':
      return (
        <Image
          source={require('./assets/present-box.png')}
          style={styles.image2}
        />
      );
      break;
    case 'sale':
      return (
        <Image source={require('./assets/sale.png')} style={styles.image2} />
      );
      break;
    case 'money':
      return (
        <Image source={require('./assets/money.png')} style={styles.image2} />
      );
      break;
    case 'trophy':
      return (
        <Image source={require('./assets/trophy.png')} style={styles.image2} />
      );
      break;
    case 'salary':
      return (
        <Image source={require('./assets/salary.png')} style={styles.image2} />
      );
      break;
    case 'discount':
      return (
        <Image
          source={require('./assets/discount.png')}
          style={styles.image2}
        />
      );
      break;
    default:
      return (
        <View
          style={{
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            backgroundColor: '#b5bab9',
          }}>
          <FontAwsome name="question" size={30} color="#737a78" />
        </View>
      );
  }
};

const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {}
};

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const getData = async key => {
  try {
    const result = await AsyncStorage.getItem(key);
    if (result !== null) {
      return result;
    }
  } catch (e) {
    // error reading value
  }
};

const Home = ({route, navigation}) => {
  const {name, money} = route.params;
  const [totalMoney, setTotalMoney] = useState(money);
  const [moneySpend, setMoneySpend] = useState(0);
  const [earnMoney, setEarnMoney] = useState(money);
  const [bname, setBname] = useState(name);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData('header').then(result => {
      let newData = JSON.parse(result);
      setBname(newData.nname);
      setTotalMoney(newData.ntotal);
      setEarnMoney(newData.nearnMoney);
      setMoneySpend(newData.nspMoney);
    });
    getData('body').then(result => {
      let newarray = JSON.parse(result);
      setData(newarray);
      storeData('body', newarray);
    });
  }, []);

  let date = route.params?.date;
  let money2 = route.params?.money2;
  let nameImg = route.params?.nameImg;
  let title = route.params?.title;
  let note = route.params?.note;
  let spmoney = route.params?.spmoney;

  let confirm = title + '' + money2;

  let newData = {
    id: title + '' + money2 + Math.floor(Math.random() * 100),
    ndate: date,
    nmoney: money2,
    nImg: nameImg,
    nnote: note,
    ntitle: title,
    nsp: spmoney,
  };

  let dataHeder = {
    nname: name,
    ntotal: totalMoney,
    nearnMoney: earnMoney,
    nspMoney: moneySpend,
  };

  const listItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          padding: 10,
          marginVertical: 10,
          backgroundColor: 'white',
          borderRadius: 20,
        }}
        onLongPress={() => {
          Alert.alert('Cảnh báo', 'Tùy chọn thao tác ?', [
            {
              text: 'Cancel',
              onPress: () => console.log('canceled'),
              style: 'cancel',
            },
            {
              text: 'Delete',
              onPress: () => {
                if (item.nsp === true) {
                  setMoneySpend(
                    parseFloat(moneySpend) - parseFloat(item.nmoney),
                  );
                } else if (item.nsp === false) {
                  setEarnMoney(parseFloat(earnMoney) - parseFloat(item.nmoney));
                }
                setData([...data.filter(e => e.id != item.id)]);
              },
            },
            {
              text: 'Edit',
              onPress: () => {
                navigation.navigate('ChoseExpenses');
                if (item.nsp === true) {
                  setMoneySpend(
                    parseFloat(moneySpend) - parseFloat(item.nmoney),
                  );
                } else if (item.nsp === false) {
                  setEarnMoney(parseFloat(earnMoney) - parseFloat(item.nmoney));
                }
                setData([...data.filter(e => e.id !== item.id)]);
              },
            },
          ]);
        }}>
        <View
          style={{
            borderBottomColor: '#9da6a5',
            paddingBottom: 5,
            borderBottomWidth: 0.5,
          }}>
          <Text style={{fontSize: 20}}>{item.ndate}</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          {getImage(item.nImg)}
          <View
            style={{
              marginLeft: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
            }}>
            <View style={{justifyContent: 'center'}}>
              <Text style={{fontSize: 15}}>{item.ntitle}</Text>
              <Text style={{fontSize: 13, color: '#afbab9'}}>{item.nnote}</Text>
            </View>
            {item.nsp === true ? (
              <Text style={{textAlign: 'center', color: 'red'}}>
                {item.nmoney
                  .toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}
              </Text>
            ) : (
              <Text style={{textAlign: 'center', color: 'blue'}}>
                {item.nmoney
                  .toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  // if (data.length !== 0) console.log(data[0].datalist + ' ' + data.length);
  // useEffect(() => {
  //   if (date && money2 && nameImg && title) {
  //     newArr.push(newData);
  //     console.log(newArr);
  //     setData(newArr);
  //   }
  // }, [confirm]);
  useEffect(() => {
    if (date && money2 && nameImg && title) {
      newArr = [...data, newData];
      // if (newArr.length !== 0) {
      //   for (let i = 0; i < newArr.length; i++) {
      //     if (newArr[i].titled === date) {
      //       newArr[i].datalist.push(...newData.datalist);
      //       setData(newArr);
      //       break;
      //     } else {
      //       temp++;
      //     }
      //   }
      //   if (temp === newArr.length) {
      //     newArr.push(newData);
      //     setData(newArr);
      //   }
      // } else {
      //   newArr.push(newData);
      //   setData(newArr);
      // }

      setData(newArr);
    }
  }, [confirm]);

  useEffect(() => {
    if (spmoney === true) {
      setMoneySpend(parseFloat(moneySpend) + parseFloat(money2));
    } else if (spmoney === false) {
      setEarnMoney(parseFloat(earnMoney) + parseFloat(money2));
    }
  }, [confirm]);

  useEffect(() => {
    setTotalMoney(parseFloat(earnMoney) - parseFloat(moneySpend));
    storeData('header', dataHeder);
    storeData('body', data);
  }, [earnMoney, moneySpend]);

  return (
    <SafeAreaView style={styles.Container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 10,
          backgroundColor: 'white',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', paddingLeft: 10}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('./assets/wallet.png')}
                style={styles.image}
              />
            </View>
            <View
              style={{
                marginLeft: 10,
              }}>
              <Text>{name}</Text>
              <Text>
                {totalMoney
                  .toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}{' '}
                VND
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={() => {
            Alert.alert('Cảnh báo', 'Bạn có muốn xóa bản ghi chi tiêu ?', [
              {
                text: 'Cancel',
                onPress: () => console.log('canceled'),
                style: 'cancel',
              },
              {
                text: 'Delete',
                onPress: () => {
                  clearStorage();
                  navigation.navigate('Side', {
                    isdel: true,
                  });
                },
                style: 'destructive',
              },
            ]);
          }}>
          <Image
            source={require('./assets/eraser.png')}
            style={{width: 25, height: 25, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 0, flex: 2}}>
        <View
          style={{
            backgroundColor: 'white',
            height: 130,
            width: '100%',
            padding: 10,
            marginBottom: 10,
            marginTop: 10,
            elevation: 10,
            borderRadius: 8,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={{marginTop: 20}}>Tiền vào</Text>
            <Text style={styles.total}>
              {earnMoney.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={{marginTop: 5}}>Tiền ra</Text>
            <Text style={styles.monneySpend}>
              {moneySpend.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}
            </Text>
          </View>
          <View
            style={{
              alignSelf: 'flex-end',
              height: 0.5,
              width: '50%',
              borderWidth: 0.5,
              marginTop: 5,
              borderColor: '#9fa4a6',
            }}></View>
          <Text style={{alignSelf: 'flex-end'}}>
            {totalMoney.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}
          </Text>
        </View>
        {data.length !== 0 ? (
          <FlatList
            data={data}
            renderItem={listItem}
            keyExtractor={(item, index) => item + index}
          />
        ) : null}
      </View>

      <View style={styles.Containerplus}>
        <TouchableOpacity
          style={styles.plus}
          onPress={() => {
            navigation.navigate('AddBill');
          }}>
          <Icon name="plus-a" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
