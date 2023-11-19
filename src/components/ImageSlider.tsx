import React, {useRef, useState} from 'react';
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

type props = {
  data: string[];
};

const ImageSlider: React.FC<props> = ({data}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    flatListRef.current?.scrollToIndex({index: newPage, animated: true});
  };

  const renderDot = (index: number) => {
    return (
      <TouchableOpacity
        key={index}
        style={[styles.dot, {opacity: index === currentPage ? 1 : 0.5}]}
        onPress={() => handlePageChange(index)}
      />
    );
  };

  const renderItem = ({item}: {item: string}) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{uri: item}} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={event => {
          const newPage = Math.round(
            event.nativeEvent.contentOffset.x / Dimensions.get('window').width,
          );
          setCurrentPage(newPage);
        }}
        snapToInterval={Dimensions.get('window').width} // Snap to the width of the screen
        decelerationRate="fast"
      />

      <View style={styles.paginationContainer}>
        {data.map((_, index) => renderDot(index))}
      </View>
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: 200, // Ensure the image takes the full height
    resizeMode: 'cover', // Maintain the aspect ratio and cover the container
  },
  paginationContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 16,
    alignSelf: 'flex-start',
    paddingLeft: 10,
  },
  dot: {
    width: 25,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#F9B023',
    margin: 5,
  },
});
