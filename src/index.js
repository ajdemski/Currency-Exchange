import './css/styles.css';
import Currency from './currency';

function updateDisplay(displayText) {
  document.getElementById('display_title').textContent = displayText;
}

const baseCurrency = 'USD';

async function getExchangeRate(baseCurrency, targetCurrency) {
  try {
    const amount = 55;
    const exchangeRate = await Currency.getExchangeRate(baseCurrency, targetCurrency);

    const displayText = `${amount} ${baseCurrency} = ${exchangeRate} ${targetCurrency}`;
    updateDisplay(displayText);
  } catch (error) {
    console.log(error);
    updateDisplay('Error');
  }
}

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  const currencySelect = document.getElementById('currency');
  const targetCurrency = currencySelect.value;
  getExchangeRate(baseCurrency, targetCurrency);
});

document.addEventListener('DOMContentLoaded', function () {
  const currencySelect = document.getElementById('currency');
  currencySelect.addEventListener('change', function () {
    const targetCurrency = currencySelect.value;
    getExchangeRate(baseCurrency, targetCurrency);
  });
});