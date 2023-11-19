import {FlatList} from 'react-native';
import React from 'react';
import {useAppSelector} from '../context/hooks';
import {Container, H1} from '../ui/StyledComponents';
import ProductCard from '../components/ProductCard';
import {commonStyles} from '../common/CommonStyles';
import {Product} from '../common/interface/Product.interface';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../router/stacks/MainStack';

type props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const Favourites: React.FC<props> = ({navigation}) => {
  const {products} = useAppSelector(state => state.favourites);
  return (
    <Container style={commonStyles.containerPadding}>
      <H1>Favourites</H1>
      <FlatList
        data={products}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: Product) => item.id.toString()}
        renderItem={({item, index}: {item: Product; index: number}) => (
          <ProductCard product={item} navigation={navigation} index={index} />
        )}
        contentContainerStyle={commonStyles.listContainer}
        numColumns={2}
      />
    </Container>
  );
};

export default Favourites;
