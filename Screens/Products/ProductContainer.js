import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

const data = require('../../assets/data/products.json');
import ProductList from '../Products/ProductList';

const ProductContainer = () => {

    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        setProducts(data);

        return () => {
            setProducts([])
        }
    }, [])
    return (
        <View>
            <Text>Product Container</Text>
            <View stle={{ marginTop: 100}}>
                <FlatList
                    horizontal
                    data={products}
                    renderItem={({item}) => <ProductList 
                    key={item.id} 
                    item={item}/>} 
                    keyExtractor={item => item.name}
                />
            </View>
        </View>
    )
}

export default ProductContainer;