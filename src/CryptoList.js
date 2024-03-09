import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
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
    <View>
      {cryptocurrencies.map((crypto) => (
        <View key={crypto.id}>
          <Text>{crypto.name}</Text>
          <Text>{crypto.current_price}</Text>
        </View>
      ))}
    </View>
  );
};

export default CryptoList;