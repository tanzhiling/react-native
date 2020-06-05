import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider, useStore} from './store';
import Tabbar from './page/tabbar';
import GoodsList from './page/goods/list';
import GoodsDetail from './page/goods/detail';
import Login from './page/user/login';
const Stack = createStackNavigator();

const App = () => {
  const {state} = useStore();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state.isLogin ? (
          <>
            <Stack.Screen name="Tabbar" component={Tabbar} />
            <Stack.Screen name="GoodsList" component={GoodsList} />
            <Stack.Screen name="GoodsDetail" component={GoodsDetail} />
          </>
        ) : (
          <Stack.Screen name="login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => (
  <Provider>
    <App />
  </Provider>
);
