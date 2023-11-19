import 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import RootRouter from './src/router';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RootRouter />
      <Toast />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
