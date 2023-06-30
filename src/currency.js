export default class Currency {
  static getCurrency() {
    const apiKey = process.env.API_KEY;
    const storedRates = sessionStorage.getItem('exchangeRates');
    if (storedRates) {
      return Promise.resolve(JSON.parse(storedRates));
    } else {
      return fetch(
        `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
      );
    }
  }
}