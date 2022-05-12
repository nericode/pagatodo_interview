import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator testID="bank-loader-ai" size="large" color="black" />
    </View>
  );
};

export default Loader;
