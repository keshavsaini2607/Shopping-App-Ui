import {Image, View} from 'react-native';
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

type props = {
  product: Product;
  navigation: StackNavigationProp<RootStackParamList>;
  index: number;
};

const ProductCard: React.FC<props> = ({product, navigation, index}) => {
  const imgUri =
    product.images && product.images.length > 0
      ? {uri: product.images[0]}
      : require('../assets/icons/imgBlackPlaceholder.png');
  return (
    <ProductCardContainer
      index={index}
      onPress={() =>
        navigation.navigate('Product', {id: product.id, navigation})
      }
      style={[commonStyles.secondaryBackground, commonStyles.containerPadding]}>
      <Box style={commonStyles.justifyBetween}>
        <Image
          source={imgUri}
          style={[commonStyles.image, commonStyles.alignCenter]}
        />
      </Box>
      <View>
        <FlexBetweenContainer>
          <B1 style={commonStyles.colorBlack}>${`${product.price}`}</B1>
        </FlexBetweenContainer>
        <FlexBetweenContainer>
          <B2 numberOfLines={1} ellipsizeMode="tail">
            {product.title}
          </B2>
        </FlexBetweenContainer>
      </View>
    </ProductCardContainer>
  );
};

export default ProductCard;
