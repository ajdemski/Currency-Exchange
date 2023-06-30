export default class Currency {
  static async getCurrency(apiKey) {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
    );
    if (!response.ok) {
      throw new Error('Failed to get exchange rates, try again');
    }
    const data = await response.json();
    if (data.result === 'success') {
      return data;
    } else {
      throw new Error('No results found, try again');
    }
  }
}