import './css/styles.css';
import Currency from './currency.js';

function updateDisplay(displayText) {
  document.getElementById('display_title').textContent = displayText;
}

async function getCurrency(currency) {
  try {
    const apiKey = process.env.API_KEY;
    const response = await Currency.getCurrency(apiKey);
    const rates = response.conversion_rates;
    if (Object.prototype.hasOwnProperty.call(rates, currency)) {
      const exchangeRate = rates[currency];
      const displayText = `1 USD = ${exchangeRate} ${currency}`;
      updateDisplay(displayText);
    } else {
      updateDisplay('Invalid Currency');
    }
  } catch (error) {
    updateDisplay('Error getting currency');
  }
}

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  const currencyInput = document.getElementById('currency');
  const currency = currencyInput.value;
  getCurrency(currency);
});

document.addEventListener('DOMContentLoaded', function () {
  getCurrency('USD');
});