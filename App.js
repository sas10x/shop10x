import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductCard from './Screens/Products/ProductCard';
import ProductContainer from './Screens/Products/ProductContainer';
import ProductList from './Screens/Products/ProductList';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
