import React, {useEffect} from 'react';
import {
  B2,
  Box,
  Container,
  FlexBetweenContainer,
  FlexColBetweenContainer,
  H1,
  H3,
  HomeHeader,
  ScrollView,
  SearchBar,
} from '../ui/StyledComponents';
import {commonStyles} from '../common/CommonStyles';
import OfferCard from '../components/OfferCard';
import ProductCard from '../components/ProductCard';
import {useAppDispatch, useAppSelector} from '../context/hooks';
import {fetchProducts} from '../context/slices/productsSlice';
import {Product} from '../common/interface/Product.interface';
import {FlatList, View} from 'react-native';
import Loading from '../components/Loading';

const Home = () => {
  const dispatch = useAppDispatch();

  const {isLoading, products, error} = useAppSelector(state => state.product);

  console.log({products});

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

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
      <View style={[commonStyles.containerPadding]}>
        <H1>Recommended</H1>
        <FlatList
          data={products}
          keyExtractor={(item: Product) => item.id.toString()}
          renderItem={({item}: {item: Product}) => (
            <ProductCard product={item} />
          )}
          contentContainerStyle={commonStyles.listContainer}
          numColumns={2}
          ListEmptyComponent={isLoading ? <Loading /> : null}
        />
      </View>
    </Container>
  );
};

export default Home;
