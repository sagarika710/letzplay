import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Topbar from '../../components/Topbar';
import TimeSlot from '../../components/TimeSlot';
import Datepicker from '../../components/Datepicker';

const mWidth = Dimensions.get('screen').width;

export default function SilverSlotScreen() {
  const [selected, setSelected] = useState('daily');
  const [pressed, setIsPressed] = useState(true);

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
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 10}}>
      <Topbar backButtonPreesed={() => alert('Backpressed')} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <TouchableOpacity
          onPress={() => setSelected('daily')}
          style={{
            width: '30%',
            borderColor: selected === 'daily' ? '#FAC516' : '#EBEAEA',
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
          onPress={() => setSelected('weekly')}
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
          onPress={() => setSelected('custom')}
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

      <View style={{marginTop: 20}}>
        <Text style={{color: 'black', fontWeight: '600', fontSize: 17}}>
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
