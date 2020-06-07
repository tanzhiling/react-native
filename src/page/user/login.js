import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text, TextInput, Button} from '../../components';
import {useStore} from '../../store';
import Design from '../../utils/design';
import Theme from '../../utils/theme';
const styles = StyleSheet.create({
  container: {
    width: Design.screenWidth,
    height: Design.screenHeith,
    backgroundColor: Theme.white,
    paddingLeft: Design.autoheight(10),
    paddingRight: Design.autoheight(10),
  },
  header: {
    height: Design.autoheight(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    alignItems: 'center',
    marginTop: Design.autoheight(10),
    marginBottom: Design.autoheight(10),
  },
  logoImage: {
    width: Design.autoWidth(100),
    height: Design.autoheight(100),
    scaleX: 3,
    scaleY: 3,
  },
  formItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Theme.borderColor,
    marginBottom: Design.autoheight(10),
  },
  formItemInput: {
    height: Design.autoheight(40),
    marginLeft: Design.autoheight(5),
  },
  btn: {
    height: Design.autoheight(50),
    borderRadius: Design.autoheight(50),
    marginBottom: Design.autoheight(10),
  },
});
const Login = () => {
  const {dispatch} = useStore();
  const handleLogin = () => {
    dispatch({
      type: 'setLogin',
      payload: {isLogin: true},
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="close" size={24} />
        <Text>帮助</Text>
      </View>
      <View style={styles.logo}>
        <Image
          style={styles.logoImage}
          source={require('../../assets/logo.png')}
        />
      </View>
      <View>
        <View style={styles.formItem}>
          <AntDesign name="user" size={24} color="#666" />
          <TextInput style={styles.formItemInput} placeholder="账号" />
        </View>
        <View style={styles.formItem}>
          <AntDesign name="lock1" size={24} color="#666" />
          <TextInput style={styles.formItemInput} placeholder="密码" />
        </View>
      </View>
      <Button style={styles.btn} onPress={handleLogin}>
        登录
      </Button>
      <View style={styles.header}>
        <Text>短信验证码登录</Text>
        <Text>手机快速注册</Text>
      </View>
    </View>
  );
};

export default Login;
