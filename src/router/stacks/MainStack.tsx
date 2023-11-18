import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeStack from './HomeStack';
import Product from '../../screens/Product';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};

export default MainStack;
