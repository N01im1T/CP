import axios from 'axios';

export const fetchCryptocurrencies = () => {
  return (dispatch) => {
    dispatch(fetchCryptoRequest());
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then((response) => {
        const cryptocurrencies = response.data;
        dispatch(fetchCryptoSuccess(cryptocurrencies));
      })
      .catch((error) => {
        dispatch(fetchCryptoFailure(error.message));
      });
  };
};

export const fetchCryptoRequest = () => {
  return {
    type: 'FETCH_CRYPTO_REQUEST',
  };
};

export const fetchCryptoSuccess = (cryptocurrencies) => {
  return {
    type: 'FETCH_CRYPTO_SUCCESS',
    payload: cryptocurrencies,
  };
};

export const fetchCryptoFailure = (error) => {
  return {
    type: 'FETCH_CRYPTO_FAILURE',
    payload: error,
  };
};
