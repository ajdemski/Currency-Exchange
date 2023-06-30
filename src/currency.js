require('dotenv').config();

export default class Currency {
  static async getCurrency(baseCurrency) {
    const apiKey = process.env.API_KEY;
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed To Get Exchange rates');
    }
    const data = await response.json();
    if (data.result === 'success') {
      return data;
    } else {
      throw new Error('No Results Found');
    }
  }
}