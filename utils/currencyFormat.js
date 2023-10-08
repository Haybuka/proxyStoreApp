const currencyFormat = (amount = 0, currency = 'NGN ') => {
  return currency + amount?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default currencyFormat