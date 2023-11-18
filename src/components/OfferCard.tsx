import {Image} from 'react-native';
import React from 'react';
import {B2, Box, OfferCardContainer, H3} from '../ui/StyledComponents';
import {commonStyles} from '../common/CommonStyles';

const OfferCard = () => {
  return (
    <OfferCardContainer
      style={[commonStyles.backgroundOrange, commonStyles.containerRadius]}>
      <Image
        source={require('../assets/icons/imgplaceholder.png')}
        style={[commonStyles.icon]}
      />
      <Box>
        <H3 style={commonStyles.colorWhite}>Get</H3>
        <H3 style={[commonStyles.colorWhite, commonStyles.textUpper]}>
          50% off
        </H3>
        <B2 style={commonStyles.colorWhite}>On first 03 order</B2>
      </Box>
    </OfferCardContainer>
  );
};

export default OfferCard;
