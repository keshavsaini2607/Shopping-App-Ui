import {Image, Pressable, View} from 'react-native';
import React from 'react';
import {
  Box,
  FlexBetweenContainer,
  ProductCardContainer,
  B1,
  B2,
} from '../ui/StyledComponents';
import {commonStyles} from '../common/CommonStyles';
import {Product} from '../common/interface/Product.interface';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../router/stacks/MainStack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useAppDispatch, useAppSelector} from '../context/hooks';
import {addToFavourites} from '../context/slices/favouritesSlice';
import {CartItem, addItem} from '../context/slices/cartSlice';
import Toast from 'react-native-toast-message';

type props = {
  product: Product;
  navigation: StackNavigationProp<RootStackParamList>;
  index: number;
};

const ProductCard: React.FC<props> = ({product, navigation, index}) => {
  const dispatch = useAppDispatch();
  const {products} = useAppSelector(state => state.favourites);
  console.log({products});
  const addFavourite = () => {
    dispatch(addToFavourites({product}));
  };

  const isFavourite = () => {
    return products.find((item: Product) => item.id === product.id);
  };

  const addToCart = () => {
    let item: CartItem = {
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: 1,
      image: product.images[0],
    };
    dispatch(addItem(item));
    Toast.show({
      type: 'success',
      text1: 'Added to cart',
    });
  };

  const imgUri =
    product.images && product.images.length > 0
      ? {uri: product.images[0]}
      : require('../assets/icons/imgBlackPlaceholder.png');
  return (
    <ProductCardContainer
      index={index}
      style={[commonStyles.secondaryBackground, commonStyles.containerPadding]}>
      <Pressable onPress={addFavourite}>
        <AntDesign
          name={isFavourite() ? 'heart' : 'hearto'}
          size={20}
          color={isFavourite() ? '#FF8181' : ''}
        />
      </Pressable>
      <Pressable
        onPress={() =>
          navigation.navigate('Product', {id: product.id, navigation})
        }>
        <Box style={[commonStyles.justifyBetween, {marginVertical: 8}]}>
          <Image
            source={imgUri}
            style={[commonStyles.image, commonStyles.alignCenter]}
          />
        </Box>
        <View>
          <FlexBetweenContainer>
            <B1 style={commonStyles.colorBlack}>${`${product.price}`}</B1>
            <Pressable onPress={addToCart}>
              <Image
                source={require('../assets/icons/add.png')}
                style={commonStyles.smallIcon}
              />
            </Pressable>
          </FlexBetweenContainer>
          <FlexBetweenContainer>
            <B2 numberOfLines={1} ellipsizeMode="tail">
              {product.title}
            </B2>
          </FlexBetweenContainer>
        </View>
      </Pressable>
    </ProductCardContainer>
  );
};

export default ProductCard;
