import React from 'react';
import {View, Text} from 'react-native';

const Home = () => {
  const styles = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <View style={styles}>
      <Text>首页</Text>
    </View>
  );
};

export default Home;
