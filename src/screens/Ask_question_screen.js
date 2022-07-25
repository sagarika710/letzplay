import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {apicaller} from './api';
export default function Question() {
  const [value, setValue] = React.useState(null);
  return (
    <View style={styles.container}>
      <View>
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
          apicaller(
            'thirdparty/notify',
            {
              type: 'email',
              recipient: 'shiv999d@gmail.com',
              subject: 'Test EMAIL',
              htmlBody: 'Hi this is tite <h1><b>TEST BODY</b></h1>' + value,
            },
            'post',
          )
            .then(response => {
              console.log(response);
              //    Alert.alert('Notification ', response.data.data.message);
              //@sagarika Please navigate back to details screen after this
            })
            .catch(e => {
              console.log(e);
              Alert.alert('Please try again');
            });
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
