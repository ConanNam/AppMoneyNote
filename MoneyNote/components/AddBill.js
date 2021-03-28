import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  body: {
    paddingLeft: 10,
    backgroundColor: 'white',
    marginTop: 30,
    paddingTop: 10,
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

// const HeaderAdd = () => {
//   return (
//     <View
//       style={{
//         flexDirection: 'row',
//         padding: 10,
//         backgroundColor: 'white',
//         justifyContent: 'space-between',
//       }}>
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <TouchableOpacity>
//           <AntDesign name="close" size={22} />
//         </TouchableOpacity>
//         <Text style={{marginLeft: 20, fontWeight: 'bold'}}>Thêm giao dịch</Text>
//       </View>
//       <TouchableOpacity>
//         <Text>LƯU</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const BodyAdd = () => {
//   return (
//     <View style={styles.body}>
//       <View
//         style={{
//           flexDirection: 'row',
//           borderBottomColor: '#b4c2be',
//           alignItems: 'center',
//           borderBottomWidth: 0.5,
//         }}>
//         <TextInput
//           placeholderTextColor="green"
//           placeholder="0"
//           style={{color: 'green', padding: 0, fontSize: 20}}
//           autoFocus={true}
//         />
//         <Text style={{fontSize: 20}}>VND</Text>
//       </View>
//     </View>
//   );
// };

const getImage = nameImg => {
  switch (nameImg) {
    case 'orange-juice':
      return (
        <Image
          source={require('./assets/orange-juice.png')}
          style={styles.image}
        />
      );
      break;
    case 'car':
      return (
        <Image source={require('./assets/car.png')} style={styles.image} />
      );
      break;
    case 'game-console':
      return (
        <Image
          source={require('./assets/game-console.png')}
          style={styles.image}
        />
      );
      break;
    case 'house':
      return (
        <Image source={require('./assets/house.png')} style={styles.image} />
      );
      break;
    case 'insurance':
      return (
        <Image
          source={require('./assets/insurance.png')}
          style={styles.image}
        />
      );
      break;
    case 'gift-box':
      return (
        <Image source={require('./assets/gift-box.png')} style={styles.image} />
      );
      break;
    case 'university':
      return (
        <Image
          source={require('./assets/university.png')}
          style={styles.image}
        />
      );
      break;
    case 'heartbeat':
      return (
        <Image
          source={require('./assets/heartbeat.png')}
          style={styles.image}
        />
      );
      break;
    case 'invoice':
      return (
        <Image source={require('./assets/invoice.png')} style={styles.image} />
      );
      break;
    case 'like':
      return (
        <Image source={require('./assets/like.png')} style={styles.image} />
      );
      break;
    case 'shop':
      return (
        <Image source={require('./assets/shop.png')} style={styles.image} />
      );
      break;
    case 'analytics':
      return (
        <Image
          source={require('./assets/analytics.png')}
          style={styles.image}
        />
      );
      break;
    case 'present-box':
      return (
        <Image
          source={require('./assets/present-box.png')}
          style={styles.image}
        />
      );
      break;
    case 'sale':
      return (
        <Image source={require('./assets/sale.png')} style={styles.image} />
      );
      break;
    case 'money':
      return (
        <Image source={require('./assets/money.png')} style={styles.image} />
      );
      break;
    case 'trophy':
      return (
        <Image source={require('./assets/trophy.png')} style={styles.image} />
      );
      break;
    case 'salary':
      return (
        <Image source={require('./assets/salary.png')} style={styles.image} />
      );
      break;
    case 'discount':
      return (
        <Image source={require('./assets/discount.png')} style={styles.image} />
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

const getCurrentDate = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  return date + '/' + month + '/' + year; //format: dd-mm-yyyy;
};

const AddBill = ({route, navigation}) => {
  const [money, setMoney] = useState(0);
  const [note, setNote] = useState('');
  const [colori, setColori] = useState('green');
  const [numF, setNumF] = useState('');
  // const [Img, setImg] = useState(route.params?.nameImg);
  // const [title, setTile] = useState(route.params?.title);

  let date = getCurrentDate();
  let spmoney = route.params?.spendmoney;
  let Img = route.params?.nameImg;
  let title = route.params?.title;

  console.log(spmoney);

  useEffect(() => {
    setNumF(
      Number(money)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    );
  }, [money]);

  useEffect(() => {
    if (spmoney === true) {
      setColori('red');
    } else if (spmoney === false) {
      setColori('blue');
    }
  }, [spmoney]);

  return (
    <View style={styles.Container}>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          backgroundColor: 'white',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <AntDesign name="close" size={22} />
          </TouchableOpacity>
          <Text style={{marginLeft: 20, fontWeight: 'bold'}}>
            Thêm giao dịch
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home', {
              money2: money,
              date: date,
              spmoney: spmoney,
              nameImg: Img,
              title: title,
              note: note,
            });
          }}>
          <Text>LƯU</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#b4c2be',
            alignItems: 'center',
            borderBottomWidth: 0.5,
            marginBottom: 20,
            marginLeft: 40,
          }}>
          <TextInput
            placeholderTextColor={`${colori}`}
            placeholder="0"
            style={{
              color: `${colori}`,
              paddingLeft: 10,
              fontSize: 30,
            }}
            autoFocus={true}
            keyboardType="numeric"
            onChangeText={val => {
              setMoney(val);
            }}
          />
          <Text
            style={{
              fontSize: 30,
              marginLeft: 20,
              color: `${colori}`,
            }}>
            VND
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginBottom: 20,
            alignItems: 'center',
            marginBottom: 10,
          }}
          onPress={() => {
            navigation.navigate('ChoseExpenses');
          }}>
          {getImage(Img)}
          <View
            style={{
              borderBottomColor: '#b5bab9',
              borderBottomWidth: 0.5,
              width: '100%',
              padding: 10,
              marginLeft: 10,
            }}>
            {title === undefined ? (
              <Text style={{fontSize: 20}}>Chọn nhóm</Text>
            ) : (
              <Text style={{fontSize: 20}}>{title}</Text>
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <View
            style={{
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 15,
              backgroundColor: '#b5bab9',
            }}>
            <FontAwsome name="sticky-note" size={20} color="#737a78" />
          </View>
          <View
            style={{
              marginLeft: 10,
              borderBottomColor: '#b5bab9',
              borderBottomWidth: 0.5,
              width: '100%',
              padding: 10,
            }}>
            <TextInput
              style={{padding: 0, fontSize: 20, color: 'black'}}
              placeholder="Thêm ghi chú"
              onChangeText={val => {
                setNote(val);
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <View
            style={{
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 15,
              backgroundColor: '#b5bab9',
            }}>
            <Fontisto name="date" size={20} color="#737a78" />
          </View>
          <View
            style={{
              marginLeft: 10,
              borderBottomColor: '#b5bab9',
              borderBottomWidth: 0.5,
              width: '100%',
              padding: 10,
            }}>
            <Text style={{fontSize: 20}}>{getCurrentDate()}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddBill;
