import React from 'react';
import {View, Text} from 'react-native';

const Category = () => {
  const styles = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <View style={styles}>
      <Text>分类</Text>
    </View>
  );
};

export default Category;
