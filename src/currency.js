export default class Currency {
  static async getExchangeRate(baseCurrency, targetCurrency) {
    const apiKey = process.env.API_KEY;
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`;
    const exchangeRatesData = sessionStorage.getItem('exchangeRates');
    let exchangeRates = {};

    if (exchangeRatesData) {
      try {
        exchangeRates = JSON.parse(exchangeRatesData);
      } catch (error) {
        throw new Error('Invalid exchange rates data');
      }
    } else {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch exchange rates');
      }
      const data = await response.json();
      if (data.result !== 'success') {
        throw new Error('No results found');
      }
      exchangeRates = data.conversion_rates;
      sessionStorage.setItem('exchangeRates', JSON.stringify(exchangeRates));
    }
    if (!exchangeRates[targetCurrency]) {
      throw new Error('Invalid exchange rate');
    }
    return exchangeRates[targetCurrency];
  }
}