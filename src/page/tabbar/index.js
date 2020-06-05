import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from './home';
import Category from './category';
import Cart from './cart';
import My from './my';
import Theme from '../../utils/theme';
const Tab = createBottomTabNavigator();
const Tabbar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === '首页') {
            iconName = 'home';
          } else if (route.name === '分类') {
            iconName = 'menufold';
          } else if (route.name === '购物车') {
            iconName = 'shoppingcart';
          } else if (route.name === '我的') {
            iconName = 'user';
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Theme.primaryColor,
        inactiveTintColor: Theme.textColor,
      }}>
      <Tab.Screen name="首页" component={Home} />
      <Tab.Screen name="分类" component={Category} />
      <Tab.Screen name="购物车" component={Cart} />
      <Tab.Screen name="我的" component={My} />
    </Tab.Navigator>
  );
};
export default Tabbar;
