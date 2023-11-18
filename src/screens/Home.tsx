import React from 'react';
import {
  B2,
  Box,
  Container,
  FlexBetweenContainer,
  FlexColBetweenContainer,
  FlexWrapContainer,
  H1,
  H3,
  HomeHeader,
  ScrollView,
  SearchBar,
} from '../ui/StyledComponents';
import {commonStyles} from '../common/CommonStyles';
import OfferCard from '../components/OfferCard';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <Container>
      <HomeHeader style={commonStyles.containerPadding}>
        <FlexColBetweenContainer>
          <H3 style={[commonStyles.colorWhite, commonStyles.fontBold]}>
            Hey, Rahul
          </H3>
          <SearchBar placeholder="Search Products or Store" />
          <FlexBetweenContainer>
            <Box>
              <B2
                style={[
                  commonStyles.textUpper,
                  commonStyles.colorOffWhite,
                  commonStyles.fontBold,
                ]}>
                Delivery To
              </B2>
              <B2 style={[commonStyles.colorWhite]}>Green Way 3000, Sylhet</B2>
            </Box>
            <Box>
              <B2
                style={[
                  commonStyles.textUpper,
                  commonStyles.colorOffWhite,
                  commonStyles.fontBold,
                ]}>
                Within
              </B2>
              <B2 style={[commonStyles.colorWhite]}>1 Hour</B2>
            </Box>
          </FlexBetweenContainer>
        </FlexColBetweenContainer>
      </HomeHeader>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: 20}}
        style={[commonStyles.containerPadding]}>
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </ScrollView>
      <FlexWrapContainer style={[commonStyles.containerPadding]}>
        <H1>Recommended</H1>
        <FlexWrapContainer>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </FlexWrapContainer>
      </FlexWrapContainer>
    </Container>
  );
};

export default Home;
