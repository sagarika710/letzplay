import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  setName,
  setEmail,
  setDOB,
  setPhone,
  getToken,
  setId,
  setreferralpoint,
  getSportid,
  getId,
} from '../../Redux/slices/userSlice';
import Topbar from '../components/Topbar';
import {apicaller} from './api';
export default function Question() {
  const [value, setValue] = React.useState(null);
  const sid = useSelector(getSportid);
  const Uid = useSelector(getId);
  function Submit() {
    var data = JSON.stringify({
      question: value,
      sports_center_id: sid,
      user_id: Uid,
    });
    apicaller(`ask-question`, data, 'post', null)
      .then(res => {
        console.log('center', res.data);
      })
      .catch(e => {
        console.log(e.value);
      });
  }
  console.log(value);
  return (
    <View style={styles.container}>
      <View
        style={{
          position: 'absolute',
          zIndex: 999,
          backgroundColor: 'transparent',
          padding: 10,
        }}>
        <Topbar backButtonPreesed={() => navigation.goBack()} />
      </View>
      <View style={{marginTop: 40}}>
        <Text style={styles.paragraph}>Type your question</Text>
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Type something"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
            onChangeText={text => {
              setValue(text);
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          Submit();
        }}>
        <Text style={styles.btntext}> Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
    paddingBottom: 15,
    justifyContent: 'space-between',
  },
  paragraph: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 20,
    fontFamily: 'ReadexPro-Bold',
    letterSpacing: 1,
  },
  textAreaContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
  },
  textArea: {
    height: 200,
    justifyContent: 'flex-start',
    fontSize: 12,
    fontFamily: 'ReadexPro-Medium',
    letterSpacing: 1,
    color: '#cccccc',
  },
  btn: {
    height: 43,
    backgroundColor: '#FAC516',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntext: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'ReadexPro-Medium',
    letterSpacing: 1,
  },
});
