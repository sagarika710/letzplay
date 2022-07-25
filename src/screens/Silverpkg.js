import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default Goldmembership = ({route}) => {
  const [showSports, setSport] = useState(0);
  const [showTime, setTime] = useState(0);
  const [sports, selectedSports] = useState('');
  const [selectedTime, setselectedTime] = useState('');
  const [selectedPackage, setselectedPackage] = useState('');
  const [activateButton, setactivateButton] = useState(false);
  const price = route.params;

  console.log('bggggggggggg', price);

  const call = () => {
    if (selectedTime !== '' && selectedPackage != '' && sports !== '') {
      setactivateButton(true);
    }
  };

  const packages = [
    {name: '12 Months'},
    {name: '6 Months'},
    {name: '3 Months'},
  ];
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#222222',
          fontSize: 16,
          fontFamily: 'ReadexPro-SemiBold',
          marginLeft: 20,
          marginTop: 20,
          marginBottom: 10,
        }}>
        Please Choose Package
      </Text>
      <ScrollView>
        {price.map((item, key) => {
          return (
            <TouchableOpacity
              key={key}
              onPress={() => {
                setselectedPackage(item.duration), call();
              }}
              style={{
                paddingTop: 20,
                paddingLeft: 10,
                flexDirection: 'row',
                flexWrap: 'wrap',
                height: 125,
                width: windowWidth * 0.9,
                marginLeft: 'auto',
                marginRight: 'auto',
                justifyContent: 'space-between',
                borderRadius: 10,
                borderColor:
                  selectedPackage === item.duration ? '#FAC516' : '#EBEAEA',
                borderWidth: 2,
                marginVertical: 5,
                marginHorizontal: 40,
                alignItems: 'center',
                shadowColor: '#000000',
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}>
              <Text style={styles.box3txt}>{item.duration}</Text>
              <Text style={styles.box3txt}>{item.price}/-</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View style={{padding: 10}}>
        <TouchableOpacity
          onPress={() => alert('payment page then home')}
          style={{
            backgroundColor: '#fac516',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            height: 43,
          }}>
          <Text
            style={{color: '#fff', fontFamily: 'ReadexPro-Bold', fontSize: 14}}>
            Proceed To Pay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  box3txt: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'ReadexPro-Bold',
    marginHorizontal: 15,
    marginTop: 30,
  },
});
