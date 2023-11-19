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
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import Loading from '../components/Loading';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../router/stacks/MainStack';

type props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const Home: React.FC<props> = ({navigation}) => {
  const dispatch = useAppDispatch();

  const {isLoading, products} = useAppSelector(state => state.product);

  const {items} = useAppSelector(state => state.cart);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Container>
      <HomeHeader style={commonStyles.containerPadding}>
        <FlexColBetweenContainer>
          <FlexBetweenContainer>
            <H3 style={[commonStyles.colorWhite, commonStyles.fontBold]}>
              Hey, Rahul
            </H3>
            <Pressable onPress={() => navigation.navigate('Cart')}>
              <Image
                source={require('../assets/icons/bagwhite.png')}
                style={commonStyles.smallIcon}
              />
              {items.length > 0 && (
                <Text style={commonStyles.cartCounter}>{items?.length}</Text>
              )}
            </Pressable>
          </FlexBetweenContainer>
          <SearchBar
            placeholder="Search Products or Store"
            placeholderTextColor="#ffffff"
            style={{opacity: 0.7}}
          />
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
        contentContainerStyle={{gap: 20, paddingRight: 50}}
        style={[commonStyles.containerPadding]}>
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </ScrollView>
      <View style={[commonStyles.containerPadding]}>
        <H1>Recommended</H1>
        <FlatList
          data={products}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: Product) => item.id.toString()}
          renderItem={({item, index}: {item: Product; index: number}) => (
            <ProductCard product={item} navigation={navigation} index={index} />
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
