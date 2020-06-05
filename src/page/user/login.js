import React from 'react';
import {View, Button} from 'react-native';
import {useStore} from '../../store';
const Login = () => {
  const {dispatch} = useStore();
  const styles = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  };
  const handleLogin = () => {
    dispatch({
      type: 'setLogin',
      payload: {isLogin: true},
    });
  };
  return (
    <View style={styles}>
      <Button title="登录" onPress={handleLogin} />
    </View>
  );
};

export default Login;
