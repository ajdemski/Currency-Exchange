export default class Currency {
  static async getExchangeRate(baseCurrency, targetCurrency) {
    const apiKey = process.env.API_KEY;
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}/${targetCurrency}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed To Get Exchange Rates');
    }
    const data = await response.json();
    if (data.result === 'success') {
      return data.conversion_rate;
    } else {
      throw new Error('No Results Found');
    }
  }
}