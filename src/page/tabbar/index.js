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
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Category') {
            iconName = 'menufold';
          } else if (route.name === 'Cart') {
            iconName = 'shoppingcart';
          } else if (route.name === 'My') {
            iconName = 'user';
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Theme.primaryColor,
        inactiveTintColor: Theme.textColor,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '首页',
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{tabBarLabel: '分类'}}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{tabBarLabel: '购物车'}}
      />
      <Tab.Screen name="My" component={My} options={{tabBarLabel: '我的'}} />
    </Tab.Navigator>
  );
};
export default Tabbar;
