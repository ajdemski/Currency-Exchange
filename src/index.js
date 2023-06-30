import './css/styles.css';

function updateDisplay(displayText) {
  document.getElementById('display_title').textContent = displayText;
}

const baseCurrency = 'USD';

async function getExchangeRate(baseCurrency, targetCurrency) {
  const apiKey = process.env.API_KEY;
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${baseCurrency}/${targetCurrency}`;

  try {
    let exchangeRatesData = sessionStorage.getItem('exchangeRates');
    let exchangeRates = {};

    if (exchangeRatesData) {
      try {
        exchangeRates = JSON.parse(exchangeRatesData);
      } catch (error) {
        throw new Error('Invalid exchange rates data');
      }
    }

    const amount = 55;

    if (exchangeRates && exchangeRates[targetCurrency]) {
      const exchangeRate = exchangeRates[targetCurrency];
      const displayText = `${amount} ${baseCurrency} = ${exchangeRate} ${targetCurrency}`;
      updateDisplay(displayText);
    } else {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed');
      }
      const data = await response.json();
      if (data.result === 'success') {
        exchangeRates = data.conversion_rates;
        sessionStorage.setItem('exchangeRates', JSON.stringify(exchangeRates));
        const exchangeRate = exchangeRates[targetCurrency];
        if (exchangeRate) {
          const displayText = `${amount} ${baseCurrency} = ${exchangeRate} ${targetCurrency}`;
          updateDisplay(displayText);
        } else {
          throw new Error('Invalid Exchange Rate');
        }
      } else {
        throw new Error('No Results Found');
      }
    }
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