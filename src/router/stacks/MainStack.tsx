import React from 'react';

import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import HomeStack from './HomeStack';
import Product from '../../screens/Product';
import Cart from '../../screens/Cart';

export type RootStackParamList = {
  HomeStack: undefined;
  Product: {id: number; navigation: StackNavigationProp<RootStackParamList>};
  Cart: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default MainStack;
