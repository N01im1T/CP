const initialState = {
    cryptocurrencies: [],
    loading: false,
    error: null,
  };
  
  const cryptoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_CRYPTO_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_CRYPTO_SUCCESS':
        return {
          ...state,
          cryptocurrencies: action.payload,
          loading: false,
          error: null,
        };
      case 'FETCH_CRYPTO_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default cryptoReducer;