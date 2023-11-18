import {Image, Pressable, View} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../router/stacks/MainStack';
import {useQuery} from 'react-query';
import {getProductById} from '../api/products';
import Loading from '../components/Loading';
import {
  B2,
  BorderButton,
  Box,
  Button,
  Container,
  FlexBetweenContainer,
  H1,
  H4,
  Label,
  RowBox,
} from '../ui/StyledComponents';
import {commonStyles} from '../common/CommonStyles';
import {StackNavigationProp} from '@react-navigation/stack';
import {Rating} from 'react-native-ratings';
import {useAppDispatch, useAppSelector} from '../context/hooks';
import {CartItem, addItem} from '../context/slices/cartSlice';

type ProductScreenRouteProp = RouteProp<RootStackParamList, 'Product'>;

type Props = {
  route: ProductScreenRouteProp;
  navigation: StackNavigationProp<RootStackParamList>;
};

const Product: React.FC<Props> = ({route, navigation}) => {
  const {id} = route.params;
  const dispatch = useAppDispatch();
  const {items} = useAppSelector(state => state.cart);
  const {data, isLoading} = useQuery(['product', id], () => getProductById(id));

  console.log({items});

  if (isLoading) {
    return <Loading />;
  }

  const addToCart = () => {
    let item: CartItem = {
      id: data.id,
      name: data.title,
      price: data.price,
      quantity: 1,
    };
    dispatch(addItem(item));
  };

  return (
    <Container style={commonStyles.containerPadding}>
      <FlexBetweenContainer>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/icons/back.png')}
            style={commonStyles.icon}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Cart')}>
          <Image
            source={require('../assets/icons/bag.png')}
            style={commonStyles.smallIcon}
          />
        </Pressable>
      </FlexBetweenContainer>
      <View style={commonStyles.marginTop}>
        <H1>{data.brand}</H1>
        <H1 style={commonStyles.fontBold}>{data.title}</H1>
        <RowBox>
          <Rating
            imageSize={15}
            ratingColor="#000000"
            ratingCount={5}
            startingValue={data.rating}
            style={commonStyles.widthMaxContent}
          />
          <B2>110 Reviews</B2>
        </RowBox>
      </View>
      <View style={commonStyles.marginTop}></View>
      <View style={commonStyles.marginTop}>
        <RowBox>
          <H4 style={[commonStyles.colorPrimary, commonStyles.fontBold]}>
            ${`${data.price}`}
          </H4>
          <Button style={commonStyles.paddingTag}>
            <Label style={commonStyles.colorWhite}>
              ${data.discountPercentage} OFF
            </Label>
          </Button>
        </RowBox>
        <FlexBetweenContainer style={commonStyles.marginTop}>
          <BorderButton style={commonStyles.paddingButton} onPress={addToCart}>
            <B2 style={commonStyles.colorPrimary}>Add To Cart</B2>
          </BorderButton>
          <Button style={commonStyles.paddingButton}>
            <B2 style={commonStyles.colorWhite}>Add To Cart</B2>
          </Button>
        </FlexBetweenContainer>
        <Box style={commonStyles.marginTop}>
          <H4 style={commonStyles.colorBlack}>Details</H4>
          <B2>{data.description}</B2>
        </Box>
      </View>
    </Container>
  );
};

export default Product;
