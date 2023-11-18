import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './stacks/MainStack';

const RootRouter = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default RootRouter;
