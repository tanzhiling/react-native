import React from 'react';
import {View, Text} from 'react-native';

const GoodsList = () => {
  const styles = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <View style={styles}>
      <Text>商品列表</Text>
    </View>
  );
};

export default GoodsList;
