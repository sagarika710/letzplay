import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Bookinghistory from '../components/Bookinghistory';

const Bookinghistory_screen = () => {
  var History = [
    {
      url: require('../assets/img/Cricket_icon.png'),
      centername: 'Aarka Sports Center',
      name: 'Cricket',
      time: '06.30',
      date: '22.02.2022',
      bookingtype: 'One Day Booking',
      price: '₹240',
    },
    {
      url: require('../assets/img/Cricket_icon.png'),
      centername: 'Aarka Sports Center',
      name: 'Cricket',
      time: '06.30',
      date: '22.02.2022',
      bookingtype: 'Silver Membership Plan',
      price: '₹240',
    },
    {
      url: require('../assets/img/Cricket_icon.png'),
      centername: 'Barbati Sports Center',
      name: 'Cricket',
      time: '06.30',
      date: '22.02.2022',
      bookingtype: 'Glod Membership Plan',
      price: '₹240',
    },
    {
      url: require('../assets/img/Cricket_icon.png'),
      centername: 'Aarka Sports Center',
      name: 'Cricket',
      time: '06.30',
      date: '22.02.2022',
      bookingtype: 'One Day Booking',
      price: '₹240',
    },
    {
      url: require('../assets/img/Cricket_icon.png'),
      centername: 'Barbati Sports Center',
      name: 'Cricket',
      time: '06.30',
      date: '22.02.2022',
      bookingtype: 'One Day Booking',
      price: '₹240',
    },
    {
      url: require('../assets/img/Cricket_icon.png'),
      centername: 'Aarka Sports Center',
      name: 'Cricket',
      time: '06.30',
      date: '22.02.2022',
      bookingtype: 'One Day Booking',
      price: '₹240',
    },
  ];
  return (
    <ScrollView style={styles.contrainer}>
      {History.map(booinghistorydata => {
        return <Bookinghistory data={booinghistorydata} />;
      })}
    </ScrollView>
  );
};
export default Bookinghistory_screen;

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
