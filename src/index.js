import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './page/home/home';
import Category from './page/category/category';
import Cart from './page/cart/cart';
import My from './page/my/my';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === '首页') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === '我的') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="首页" component={Home} />
      <Tab.Screen name="分类" component={Category} />
      <Tab.Screen name="购物车" component={Cart} />
      <Tab.Screen name="我的" component={My} />
    </Tab.Navigator>
  );
}
function DetailsScreen({route}) {
  const {id} = route.params;
  const styles = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <View style={styles}>
      <Text>Details Screen</Text>
      <Text>{id}</Text>
    </View>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{title: 'Overview'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
