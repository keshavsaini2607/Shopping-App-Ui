import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Categories from '../../screens/Categories';
import Favourites from '../../screens/Favourites';
import More from '../../screens/More';
import CustomBottomTab from '../../components/bottomTabs/CustomBottomTab';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <CustomBottomTab {...props} />}>
      <Tab.Group screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Categories" component={Categories} />
        <Tab.Screen name="Favourites" component={Favourites} />
        <Tab.Screen name="More" component={More} />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default HomeStack;
