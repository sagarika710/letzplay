import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// packages import
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icons from 'react-native-vector-icons/dist/FontAwesome5';
import RBSheet from 'react-native-raw-bottom-sheet';

// components import
import BookingScreenBottomSheet from '../components/BookingScreenBottomSheet';

// initialisations
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function BookingScreen2({navigation}) {
  const refRBSheet = useRef();

  const usersInfo = [
    {id: 1, name: 'Siddheshwar Panda', age: 21, sport: 'Cricket'},
    {id: 2, name: 'Rameshwar Panda', age: 15, sport: 'Badminton'},
  ];

  const [isSelf, setIsSelf] = useState(true);
  const [users, setUsers] = useState(usersInfo);

  const handleDelete = id => {
    setUsers(users.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View>
          <TouchableOpacity
            onPress={() => {
              setIsSelf(true);
            }}
            style={{
              height: 64,
              marginHorizontal: 10,
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: isSelf ? '#FAC516' : '#E7E7E7',
              padding: 10,
              borderRadius: 10,
            }}>
            <View
              style={{
                backgroundColor: '#FAC516',
                height: 40,
                width: 40,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#ffffff'}}>
                <Icons name="user-alt" size={20} />
              </Text>
            </View>
            <Text
              style={{
                color: '#222222',
                fontFamily: 'ReadexPro-Bold',
                letterSpacing: 1,
                marginLeft: 30,
                alignSelf: 'center',
              }}>
              Self
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsSelf(false);
              refRBSheet.current.open();
            }}
            style={{
              height: 64,
              marginHorizontal: 10,
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: isSelf ? '#E7E7E7' : '#FAC516',
              padding: 10,
              borderRadius: 10,
              marginVertical: 10,
            }}>
            <View
              style={{
                backgroundColor: '#FAC516',
                height: 40,
                width: 40,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#ffffff'}}>
                <Icons name="user-friends" size={20} />
              </Text>
            </View>
            <Text
              style={{
                color: '#222222',
                fontFamily: 'ReadexPro-Bold',
                letterSpacing: 1,
                marginLeft: 30,
                alignSelf: 'center',
              }}>
              Otherskjhg
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: users.length > 0 ? 'flex' : 'none',
            marginHorizontal: 10,
            height: 100,
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              color: '#222',
              fontFamily: 'ReadexPro-Bold',
              letterSpacing: 0.5,
            }}>
            Members
          </Text>
          {users.map(user => (
            <View
              key={user.id}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#222',
                  fontFamily: 'ReadexPro-Medium',
                }}>
                {user.name}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: '#222',
                  fontFamily: 'ReadexPro-Medium',
                }}>
                {user.sport}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: '#222',
                  fontFamily: 'ReadexPro-Medium',
                }}>
                {user.age}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  handleDelete(user.id);
                }}>
                <Text style={{color: 'red', marginLeft: 6}}>
                  <Icon name="trash" size={15} />
                </Text>
                <Text style={{color: 'red', fontSize: 7}}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 30,
            flexDirection: 'row',

            borderBottomColor: '#DFDDDD',
            borderBottomWidth: 1,
            paddingBottom: 15,

            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'ReadexPro-Bold',
              letterSpacing: 1,
              fontSize: 16,
              color: '#292a2e',
            }}>
            Add More Member
          </Text>
          <TouchableOpacity
            onPress={() => {
              refRBSheet.current.open();
            }}>
            <Text style={{color: '#0003C1', marginLeft: 10}}>
              <Icon name="plus-square-o" size={15} />
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginHorizontal: 10,
            borderBottomColor: '#DFDDDD',
            borderBottomWidth: 1,
            paddingBottom: 15,
          }}>
          <Text
            style={{
              fontFamily: 'ReadexPro-Bold',
              letterSpacing: 1,
              fontSize: 14,
              color: '#222222',
              marginVertical: 5,
            }}>
            Booking Details
          </Text>

          <View>
            <Text
              style={{
                fontFamily: 'ReadexPro-Medium',
                letterSpacing: 0.5,
                fontSize: 12,
                color: '#717171',
              }}>
              Aarka Sports Center, Near Bigbazar,Patia, INFO City
              Road,Bhubaneswar,745321
            </Text>
            <Text
              style={{
                fontFamily: 'ReadexPro-Medium',
                letterSpacing: 0.5,
                fontSize: 12,
                color: '#717171',
              }}>
              Sports: Cricket Slot Booked: 27th Jan 2021, Monday,
              09.30AM-11.30AM
            </Text>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              fontFamily: 'ReadexPro-Bold',
              letterSpacing: 1,
              fontSize: 14,
              color: '#222222',
              marginVertical: 20,
            }}>
            Price Details
          </Text>
        </View>

        <View
          style={{
            marginHorizontal: 10,

            borderBottomColor: '#DFDDDD',
            borderBottomWidth: 1,
            paddingBottom: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontFamily: 'ReadexPro-Medium',
                letterSpacing: 0.5,
                fontSize: 14,
                color: '#717171',
              }}>
              2 x Player{' '}
            </Text>
            <Text
              style={{
                fontFamily: 'ReadexPro-Medium',
                letterSpacing: 0.5,
                fontSize: 14,
                color: '#717171',
              }}>
              ₹ 540.00{' '}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontFamily: 'ReadexPro-Medium',
                letterSpacing: 0.5,
                fontSize: 14,
                color: '#717171',
              }}>
              GST{' '}
            </Text>
            <Text
              style={{
                fontFamily: 'ReadexPro-Medium',
                letterSpacing: 0.5,
                fontSize: 14,
                color: '#717171',
              }}>
              ₹ 10.00{' '}
            </Text>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text
              style={{
                fontFamily: 'ReadexPro-Medium',
                letterSpacing: 0.5,
                fontSize: 14,
                color: '#717171',
              }}>
              Grand Total
            </Text>
            <Text
              style={{
                fontFamily: 'ReadexPro-Medium',
                letterSpacing: 0.5,
                fontSize: 14,
                color: '#717171',
              }}>
              ₹ 550.00{' '}
            </Text>
          </View>
        </View>
        <View style={{height: 20}}></View>
      </ScrollView>
      <View style={{height: 80}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#fac516',
            borderRadius: 10,
            marginHorizontal: 10,
            height: 43,
            justifyContent: 'center',
            position: 'absolute',
            bottom: 20,
            width: '95%',
          }}
          onPress={() => navigation.navigate('Payment')}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'ReadexPro-Bold',
              letterSpacing: 1,
              color: 'white',
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
      {/* BottomSheet */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressBack={true}
        height={350}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: '#2222229a',
          },
          container: {
            backgroundColor: '#ffffff',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
          // draggableIcon: {
          //     backgroundColor: '#000',
          // },
        }}>
        <BookingScreenBottomSheet />
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
