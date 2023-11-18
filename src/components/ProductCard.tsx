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

const ProductCard = () => {
  return (
    <ProductCardContainer
      style={[commonStyles.secondaryBackground, commonStyles.containerPadding]}>
      <Box style={commonStyles.justifyBetween}>
        <Image
          source={require('../assets/icons/imgBlackPlaceholder.png')}
          style={[commonStyles.icon, commonStyles.alignCenter]}
        />
      </Box>
      <View>
        <FlexBetweenContainer>
          <B1 style={commonStyles.colorBlack}>$325</B1>
        </FlexBetweenContainer>
        <FlexBetweenContainer>
          <B2>Clown Tang.B03</B2>
        </FlexBetweenContainer>
      </View>
    </ProductCardContainer>
  );
};

export default ProductCard;
