require('dotenv').config();

import './css/styles.css';
import Currency from './currency.js';

function updateDisplay(displayText) {
  document.getElementById('display_title').textContent = displayText;
}

async function getCurrency(baseCurrency, currency) {
  try {
    const response = await Currency.getCurrency(baseCurrency);
    const rates = response.conversion_rates;

    if (Object.prototype.hasOwnProperty.call(rates, currency)) {
      const exchangeRate = rates[currency];
      const displayText = `1 ${baseCurrency} = ${exchangeRate} ${currency}`;
      updateDisplay(displayText);
    } else {
      updateDisplay('Invalid Currency');
    }
  } catch (error) {
    updateDisplay('Error Getting Currency');
  }
}

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  const baseCurrency = 'USD';
  const currencyInput = document.getElementById('currency');
  const currency = currencyInput.value;
  getCurrency(baseCurrency, currency);
});

document.addEventListener('DOMContentLoaded', function () {
  const baseCurrency = 'USD';
  getCurrency(baseCurrency, 'USD');
});