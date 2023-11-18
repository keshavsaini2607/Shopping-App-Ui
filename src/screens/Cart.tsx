import {Pressable, Image} from 'react-native';
import React from 'react';
import {Container, H3, RowBox} from '../ui/StyledComponents';
import {commonStyles} from '../common/CommonStyles';
import {RootStackParamList} from '../router/stacks/MainStack';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const Cart: React.FC<Props> = ({navigation}) => {
  return (
    <Container style={commonStyles.containerPadding}>
      <RowBox>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/icons/back.png')}
            style={commonStyles.icon}
          />
        </Pressable>
        <H3 style={commonStyles.colorBlack}>Shopping Cart</H3>
      </RowBox>
    </Container>
  );
};

export default Cart;
