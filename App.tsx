import 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import RootRouter from './src/router';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RootRouter />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
