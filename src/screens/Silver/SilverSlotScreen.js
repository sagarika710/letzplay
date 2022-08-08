import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Topbar from '../../components/Topbar';
import TimeSlot from '../../components/TimeSlot';
import Datepicker from '../../components/Datepicker';
import {apicaller} from '../api';

const mWidth = Dimensions.get('screen').width;

export default function SilverSlotScreen() {
  const [selectedtype, setSelectedtype] = useState('Playing');
  const [selectedgame, setSelectedgame] = useState('');
  const [selected, setSelected] = useState('');

  const [pressed, setIsPressed] = useState();
  const [type, setType] = useState('');
  const [playdata, setPlaydata] = useState('');
  const [traindata, setTraindata] = useState('');
  const [display, setDisplay] = useState('');
  const timeslots = [
    {id: 1, time: '07.30AM-09.30AM'},
    {id: 2, time: '08.30AM-09.30AM'},
    {id: 3, time: '09.30AM-09.30AM'},
    {id: 4, time: '10.30AM-09.30AM'},
    {id: 5, time: '11.30AM-09.30AM'},
    {id: 6, time: '12.30AM-09.30AM'},
    {id: 7, time: '01.30AM-09.30AM'},
    {id: 8, time: '02.30AM-09.30AM'},
    {id: 9, time: '03.30AM-09.30AM'},
  ];
  useEffect(() => {
    play();
  }, []);
  // useEffect(() => {
  //   apicaller(`sports-center/${id}`, null, 'get', `Bearer ${Token}`)
  //     .then(res => {
  //       console.log('sports-center', res.data.sports_centre_image);
  //       setData(res.data);
  //     })
  //     .catch(e => {
  //       console.log(e.value);
  //     });
  // }, []);
  function play() {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://15.207.26.74:8000/api/get-slot-catId?sports_center_id=62ec1b904af75d5c52d1caa1&booking_type=playing',
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log('play', JSON.stringify(response.data));
        setPlaydata(response.data);
        selectedtype('Playing');
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function train() {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://15.207.26.74:8000/api/get-slot-catId?sports_center_id=62ec1b904af75d5c52d1caa1&booking_type=traning',
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log('train', JSON.stringify(response.data));
        setTraindata(response.data);
        selectedtype('train');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function slot() {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://15.207.26.74:8000/api/getSlotsByCategoryId?booking_type=training&sports_category_id=62ec15894af75d5c52d1ca85&slot_date=today&sports_center_id=62ec1b904af75d5c52d1caa1',
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 10}}>
      <Topbar backButtonPreesed={() => alert('Backpressed')} />
      <Text
        style={{
          color: 'black',
          fontWeight: '600',
          fontSize: 17,
          marginTop: 40,
        }}>
        Booking Type
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            setSelectedtype('Playing'), play();
          }}
          style={{
            width: '48%',
            backgroundColor: selectedtype === 'Playing' ? '#FAC516' : '#fff',
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: selectedtype === 'Playing' ? '#Fff' : '#717171',
              fontSize: 18,
              fontWeight: '700',
            }}>
            Playing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedtype('Traning'), train();
          }}
          style={{
            backgroundColor: selectedtype === 'Traning' ? '#FAC516' : '#fff',
            borderWidth: 1,
            width: '48%',
            padding: 10,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: selectedtype === 'Traning' ? '#fff' : '#717171',
              textAlign: 'center',
              fontSize: 18,
              fontWeight: '700',
            }}>
            Traning
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 20}}>
        <Text
          style={{
            color: 'black',
            fontWeight: '600',
            fontSize: 17,
            marginTop: 40,
          }}>
          Select sport
        </Text>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {selectedtype == 'Playing'
            ? playdata
              ? playdata?.map(item => (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedgame(item.id);
                      setType('show');
                    }}
                    style={{
                      width: mWidth * 0.3,
                      alignSelf: 'center',
                      alignItems: 'center',
                      padding: 10,
                      justifyContent: 'center',
                      flexDirection: 'row',
                      borderColor:
                        selectedgame == item.id ? '#FAC516' : '#9C9C9C',
                      borderWidth: 1,
                      borderRadius: 10,
                      marginBottom: 10,
                    }}>
                    <Text
                      key={item.id}
                      style={{
                        color: selectedgame == item.id ? '#FAC516' : '#222222',
                        fontSize: 15,

                        textAlign: 'center',
                        fontWeight: '700',
                      }}>
                      {item.category_name}
                    </Text>
                  </TouchableOpacity>
                  // <TimeSlot key={item.id} time={item.time} />
                ))
              : null
            : traindata
            ? traindata?.map(item => (
                <TouchableOpacity
                  onPress={() => {
                    setIsPressed(item.id);
                    setType('show');
                  }}
                  style={{
                    width: mWidth * 0.3,
                    alignSelf: 'center',
                    alignItems: 'center',
                    padding: 10,
                    justifyContent: 'center',
                    flexDirection: 'row',
                    borderColor: pressed == item.id ? '#FAC516' : '#9C9C9C',
                    borderWidth: 1,
                    borderRadius: 10,
                    marginBottom: 10,
                  }}>
                  <Text
                    key={item.id}
                    style={{
                      color: pressed == item.id ? '#FAC516' : '#222222',
                      fontSize: 15,

                      textAlign: 'center',
                      fontWeight: '700',
                    }}>
                    {item.category_name}
                  </Text>
                </TouchableOpacity>
              ))
            : null}
        </View>
      </View>
      {type == 'show' && (
        <>
          <Text
            style={{
              color: 'black',
              fontWeight: '600',
              fontSize: 17,
              marginTop: 40,
            }}>
            Date Type
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                setSelected('daily'), setDisplay('time');
              }}
              style={{
                width: '30%',
                ba: selected === 'daily' ? '#FAC516' : '#EBEAEA',
                borderWidth: 1,
                padding: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: selected === 'daily' ? '#FAC516' : '#717171',
                  fontSize: 18,
                  fontWeight: '700',
                }}>
                Daily
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelected('weekly'), setDisplay('time');
              }}
              style={{
                borderColor: selected === 'weekly' ? '#FAC516' : '#EBEAEA',
                borderWidth: 1,
                width: '30%',
                padding: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: selected === 'weekly' ? '#FAC516' : '#717171',
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: '700',
                }}>
                Weekly
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelected('custom');
                setDisplay('time');
              }}
              style={{
                borderColor: selected === 'custom' ? '#FAC516' : '#EBEAEA',
                borderWidth: 1,
                width: '30%',
                padding: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: selected === 'custom' ? '#FAC516' : '#717171',
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: '700',
                }}>
                Custom
              </Text>
            </TouchableOpacity>
          </View>
          {selected === 'custom' ? <Datepicker /> : null}
        </>
      )}
      {display == 'time' && (
        <>
          <View style={{marginTop: 20}}>
            <Text
              style={{
                color: 'black',
                fontWeight: '600',
                fontSize: 17,
                marginTop: 40,
              }}>
              Select Time
            </Text>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              {timeslots.map(item => (
                <TouchableOpacity
                  onPress={() => {
                    setIsPressed(item.id);
                  }}
                  style={{
                    width: mWidth * 0.3,
                    alignSelf: 'center',
                    alignItems: 'center',
                    padding: 10,

                    flexDirection: 'row',
                    borderColor: pressed == item.id ? '#FAC516' : '#9C9C9C',
                    borderWidth: 1,
                    borderRadius: 10,
                    marginBottom: 10,
                  }}>
                  <Text
                    key={item.id}
                    style={{
                      color: pressed == item.id ? '#FAC516' : '#222222',
                      fontSize: 10,

                      textAlign: 'center',
                      fontWeight: '700',
                    }}>
                    {item.time}
                  </Text>
                </TouchableOpacity>
                // <TimeSlot key={item.id} time={item.time} />
              ))}
            </View>
          </View>
        </>
      )}

      <TouchableOpacity
        style={{
          marginTop: 30,
          backgroundColor: pressed && selected ? '#FAC516' : '#FDDA67',

          borderRadius: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            padding: 10,

            fontSize: 20,
            color: '#ffffff',
            fontWeight: '700',
          }}>
          Book Now
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
