import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image,  ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCryptocurrencies } from '../store/actions/cryptoActions';

const CryptoList = () => {
  const dispatch = useDispatch();
  const { cryptocurrencies, loading } = useSelector((state) => state.crypto);

  useEffect(() => {
    dispatch(fetchCryptocurrencies());
  }, [dispatch]);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View>
        {cryptocurrencies.map((crypto) => (
          <View key={crypto.id} style={styles.container}>
            <Image
              style={styles.image}
              source={{ uri: crypto.image }}
              />
            <Text>{crypto.name}</Text>
            <Text>{crypto.current_price}$</Text>
          </View>
        ))}
      </View>
    </ScrollView>  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 9,
    margin: 10,
  },
});

export default CryptoList;