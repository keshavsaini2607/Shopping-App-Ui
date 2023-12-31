import {Image, Pressable, Text, View} from 'react-native';
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
import ImageSlider from '../components/ImageSlider';
import Toast from 'react-native-toast-message';

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

  const isProductInCart = () => {
    return items.find((item: CartItem) => item.id === id);
  };

  if (isLoading) {
    return <Loading />;
  }

  const addToCart = () => {
    if (isProductInCart()) {
      navigation.navigate('Cart');
      return;
    }
    let item: CartItem = {
      id: data.id,
      name: data.title,
      price: data.price,
      quantity: 1,
      image: data.images[0],
    };
    dispatch(addItem(item));
    Toast.show({
      type: 'success',
      text1: 'Added to cart',
    });
  };

  const buyNow = () => {
    addToCart();
    navigation.navigate('Cart');
  };

  return (
    <Container>
      <FlexBetweenContainer style={commonStyles.paddingSmall}>
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
          {items.length > 0 && (
            <Text style={commonStyles.cartCounter}>{items?.length}</Text>
          )}
        </Pressable>
      </FlexBetweenContainer>
      <View style={[commonStyles.containerPadding]}>
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
      <View>
        <ImageSlider data={data.images} />
      </View>
      <View style={[commonStyles.marginTop, commonStyles.containerPadding]}>
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
            <B2 style={commonStyles.colorPrimary}>
              {isProductInCart() ? 'Go To Cart' : 'Add To Cart'}
            </B2>
          </BorderButton>
          <Button style={commonStyles.paddingButton} onPress={buyNow}>
            <B2 style={commonStyles.colorWhite}>Buy Now</B2>
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
