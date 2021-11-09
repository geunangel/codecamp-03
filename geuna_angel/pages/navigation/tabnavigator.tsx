import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from './search';
import Home from './home';
import Mypage from './mypage';
// import {Icon} from 'react-native';

function TabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="검색" component={Search} />
      <Tab.Screen name="홈" component={Home} />
      <Tab.Screen name="내프로필" component={Mypage} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
