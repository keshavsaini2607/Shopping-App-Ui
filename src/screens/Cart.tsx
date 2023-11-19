import {Pressable, Image, View} from 'react-native';
import React from 'react';
import {
  B1,
  B2,
  Box,
  Button,
  Container,
  FlexBetweenContainer,
  FlexColBetweenContainer,
  H3,
  RowBox,
} from '../ui/StyledComponents';
import {commonStyles} from '../common/CommonStyles';
import {RootStackParamList} from '../router/stacks/MainStack';
import {StackNavigationProp} from '@react-navigation/stack';
import {useAppDispatch, useAppSelector} from '../context/hooks';
import {
  CartItem,
  removeItem,
  updateQuantity,
} from '../context/slices/cartSlice';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const Cart: React.FC<Props> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const {items} = useAppSelector(state => state.cart);

  const changeQuantity = (item: CartItem, operation: string) => {
    switch (operation) {
      case '+':
        dispatch(updateQuantity({id: item.id, quantity: item.quantity + 1}));
        break;
      case '-':
        if (item.quantity - 1 < 1) {
          dispatch(removeItem(item.id));
        }
        dispatch(updateQuantity({id: item.id, quantity: item.quantity - 1}));
        break;
      default:
        return;
    }
  };

  const getCartTotal = () => {
    let total = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    return total;
  };

  return (
    <View style={[commonStyles.container]}>
      <FlexColBetweenContainer style={commonStyles.containerPadding}>
        <RowBox>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/icons/back.png')}
              style={commonStyles.icon}
            />
          </Pressable>
          <H3 style={commonStyles.colorBlack}>
            Shopping Cart ({items.length})
          </H3>
        </RowBox>
        <Container
          style={commonStyles.listPaddingBottom}
          showsVerticalScrollIndicator={false}>
          {items.map((item: CartItem) => (
            <FlexBetweenContainer style={commonStyles.marginTop} key={item.id}>
              <RowBox style={{width: '40%'}}>
                <Image source={{uri: item?.image}} style={commonStyles.icon} />
                <Box>
                  <B2 style={commonStyles.fontBold}>{item.name}</B2>
                  <B2>${item.price}</B2>
                </Box>
              </RowBox>
              <RowBox>
                <Button
                  style={commonStyles.roundedBackground}
                  onPress={() => changeQuantity(item, '-')}>
                  <H3>-</H3>
                </Button>
                <B2>{item.quantity}</B2>
                <Button
                  style={commonStyles.roundedBackground}
                  onPress={() => changeQuantity(item, '+')}>
                  <H3>+</H3>
                </Button>
              </RowBox>
            </FlexBetweenContainer>
          ))}
        </Container>
        <Box
          style={[
            commonStyles.marginTop,
            commonStyles.bottomSheet,
            commonStyles.containerPadding,
          ]}>
          <FlexBetweenContainer>
            <B2>Subtotal</B2>
            <B2>${getCartTotal()}</B2>
          </FlexBetweenContainer>
          <FlexBetweenContainer>
            <B2>Delivery</B2>
            <B2>{items.length > 0 ? '$2' : 'NA'}</B2>
          </FlexBetweenContainer>
          <FlexBetweenContainer>
            <B2>Subtotal</B2>
            <B2>${items.length > 0 ? `${getCartTotal() + 2}` : 'NA'}</B2>
          </FlexBetweenContainer>
          <Button
            style={[
              commonStyles.paddingButton,
              commonStyles.wFull,
              commonStyles.marginTop,
            ]}
            disabled={items.length < 1}>
            <B1 style={commonStyles.colorWhite}>Proceed To Checkout</B1>
          </Button>
        </Box>
      </FlexColBetweenContainer>
    </View>
  );
};

export default Cart;
