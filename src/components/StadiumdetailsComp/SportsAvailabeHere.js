import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import cricketbat from '../../assets/img/cricketbat.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../Colors';
import {List} from 'react-native-paper';
import SubHeadings from './SubHeadings';
import OurCoaches from './OurCoaches';
import {apicaller} from '../../screens/api';

import {
  getToken,
  setSname,
  setSportid,
  setStadid,
  setSurl,
} from '../../../Redux/slices/userSlice';
import {useSelector, useDispatch} from 'react-redux';
const SportData = [
  {
    id: 1,
    title: 'Cricket',
    icons: require('../../assets/img/Sports/Cricket_small.png'),
    desc: 'Cricket',
  },
  {
    id: 2,
    title: 'Footbal',
    icons: require('../../assets/img/Sports/Football_small.png'),
    desc: 'Footbal',
  },
  {
    id: 3,
    title: 'Badminton',
    icons: require('../../assets/img/Sports/Badminton_small.png'),
    desc: 'Badminton',
  },
  {
    id: 4,
    title: 'Gym',
    icons: require('../../assets/img/Sports/Gym_small.png'),
    desc: 'Gym',
  },
  {
    id: 5,
    title: 'Cricket',
    icons: require('../../assets/img/Sports/Tennis_small.png'),
    desc: 'Tennis',
  },
];

export default function SportsAvailabeHere(props) {
  const [selected, setSelected] = useState(1);
  const [sports, setSports] = useState();
  const [sportslist, setSportslist] = useState();
  const mWidth = Dimensions.get('screen').width;
  const [ids, setIds] = useState('');
  const [name, setName] = useState('');
  const [couch, setCouch] = useState([]);
  const dispatch = useDispatch();
  const [data, setData] = useState('');
  const Token = useSelector(getToken);
  useEffect(() => {
    dispatch(setSportid(false));
    apicaller(
      `get-category-by-sports-center/62bbcb290f31d4e3cce6c553`,
      null,
      'get',
      null,
    )
      .then(res => {
        console.log('get-category-by-sports-center', res.data.category);
        setSports(res.data.category);
      })
      .catch(e => {
        console.log(e.value);
      });
  }, []);

  function coach(id, sid) {
    apicaller(
      `services-by-sport-center-id?sports_center_id=62bbcb290f31d4e3cce6c553&sports_category_id=62b564a927d097a67fcb9936`,
      null,
      'get',
      `Bearer ${Token}`,
    )
      .then(res => {
        console.log('kjhgfgkilhgufyctu', res.data);
        setData(res.data);
      })
      .catch(e => {
        console.log(e.value);
      });
  }

  return (
    <>
      {sports ? (
        <>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {sports.map(item => (
              <>
                <TouchableOpacity
                  onPress={() => {
                    coach(item.sports_category_id._id);
                    setName(item.sports_category_id.category_name);
                    setIds(item._id);
                    dispatch(setSportid(item.sports_category_id._id));
                    dispatch(setStadid(item.sports_center_id));
                    dispatch(setSname(item.sports_category_id.category_image));
                    dispatch(setSurl(item.sports_category_id.category_name));
                  }}
                  style={{
                    borderWidth: 1,
                    borderColor: ids == item._id ? '#FAC516' : '#9C9C9C',
                    flexDirection: 'row',
                    height: 40,
                    alignItems: 'center',
                    borderRadius: 10,
                    marginTop: 10,
                    marginRight: 6,
                  }}>
                  <Image
                    style={{height: 30, width: 30}}
                    source={{uri: item.sports_category_id.category_image}}
                  />
                  <Text
                    style={{
                      color: ids == item.id ? '#FAC516' : '#9C9C9C',
                      fontFamily: 'ReadexPro-Medium',
                      textAlign: 'center',
                      marginRight: 12,
                      fontSize: 10,
                    }}>
                    {item.sports_category_id.category_name}
                  </Text>
                </TouchableOpacity>
              </>
            ))}
            <View
              style={
                name
                  ? {
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: '#9C9C9C',
                      padding: 10,
                      width: '100%',
                      marginTop: 10,
                    }
                  : {display: 'none'}
              }>
              <Text
                style={{
                  color: '#FAC516',
                  fontFamily: 'ReadexPro-Regular',
                  letterSpacing: 1,
                  fontSize: 14,
                }}>
                {name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',

                  flexWrap: 'wrap',
                  marginTop: 5,
                }}>
                {data
                  ? data.map(des => (
                      <>
                        <View
                          style={{
                            flexDirection: 'row',
                            width: '50%',

                            marginTop: 10,
                          }}>
                          <Icon
                            name="rhombus"
                            size={10}
                            color={Colors.main}
                            style={{padding: 3}}
                          />
                          <Text
                            style={{
                              color: Colors.grayTwo,
                              paddingLeft: 5,
                              fontSize: 12,
                              fontFamily: 'ReadexPro-Regular',
                            }}>
                            {des.service_name}
                          </Text>
                        </View>
                      </>
                    ))
                  : null}
              </View>
            </View>
          </View>
        </>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#0003C1" />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
