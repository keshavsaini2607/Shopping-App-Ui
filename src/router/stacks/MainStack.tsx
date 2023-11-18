import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeStack from './HomeStack';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeStack" component={HomeStack} />
    </Stack.Navigator>
  );
};

export default MainStack;
