import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useState, useRef} from 'react';
import stadium from '../../assets/img/stadium.png';

export default function StadiumdetailsSlider(props) {
  const [selectedItem, setSelectedItem] = useState(
    props.img.sports_centre_image[1]._id,
  );
  const mWidth = Dimensions.get('screen').width;
  const mHeight = Dimensions.get('screen').height;

  const DATA = [
    {
      id: 1,
      img: require('../../assets/img/stadium.png'),
    },
    {
      id: 2,
      img: require('../../assets/img/herocarousal.png'),
    },
    {
      id: 3,
      img: require('../../assets/img/stadium.png'),
    },
    {
      id: 4,
      img: require('../../assets/img/herocarousal.png'),
    },
    {
      id: 5,
      img: require('../../assets/img/stadium.png'),
    },
    {
      id: 6,
      img: require('../../assets/img/herocarousal.png'),
    },
    {
      id: 7,
      img: require('../../assets/img/stadium.png'),
    },
    {
      id: 8,
      img: require('../../assets/img/herocarousal.png'),
    },
    {
      id: 9,
      img: require('../../assets/img/stadium.png'),
    },
  ];

  return (
    <View>
      {props.img.sports_centre_image.map(i =>
        selectedItem == i._id ? (
          <Image
            source={{uri: i.img}}
            style={{height: mHeight * 0.25, width: '100%'}}
          />
        ) : null,
      )}

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.img.sports_centre_image.map(item => (
          <View style={{padding: 5, paddingTop: 8}}>
            <TouchableOpacity
              onPress={() => setSelectedItem(item._id)}
              key={item.id}>
              <Image
                source={{uri: item.img}}
                style={{
                  height: selectedItem == item._id ? 80 : 65,

                  marginTop: selectedItem == item._id ? 0 : 10,
                  width:
                    selectedItem == item._id ? mWidth * 0.35 : mWidth * 0.3,
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
