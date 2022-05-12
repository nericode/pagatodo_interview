import React from 'react';
import {Text, View, Image} from 'react-native';
import Images from '../../assets/Images';

const Error = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={Images.robot} />
      <Text
        style={{
          color: '#D42E2E',
          fontSize: 22,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        Ups!, a error occurred!
      </Text>
    </View>
  );
};

export default Error;
