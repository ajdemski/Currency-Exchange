import './css/styles.css';
import Currency from './currency';

function updateDisplay(displayText) {
  document.getElementById('display_title').textContent = displayText;
}

const form = document.querySelector('form');
const amountInput = document.getElementById('amount');
const CurrencySelect = document.getElementById('currency');

async function getExchangeRate(baseCurrency, targetCurrency) {
  try {
    const amount = Number(amountInput.value);
    const exchangeRate = await Currency.getExchangeRate(baseCurrency, targetCurrency);
    const convertedAmount = amount * exchangeRate;

    const displayText = `${amount} ${baseCurrency} = ${convertedAmount} ${targetCurrency}`;
    updateDisplay(displayText);
  } catch (error) {
    console.log(error);
    updateDisplay('Error');
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const baseCurrency = 'USD';
  const targetCurrency = CurrencySelect.value;
  getExchangeRate(baseCurrency, targetCurrency);
});

CurrencySelect.addEventListener('change', function () {
  const baseCurrency = 'USD';
  const targetCurrency = CurrencySelect.value;
  getExchangeRate(baseCurrency, targetCurrency);
});