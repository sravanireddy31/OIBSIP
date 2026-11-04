const form = document.querySelector('#converter-form');
const temperatureInput = document.querySelector('#temperature');
const unitSelect = document.querySelector('#unit');
const inputSymbol = document.querySelector('#input-symbol');
const errorMessage = document.querySelector('#error-message');
const results = document.querySelector('#results');

const unitDetails = {
  celsius: { symbol: '°C', absoluteZero: -273.15 },
  fahrenheit: { symbol: '°F', absoluteZero: -459.67 },
  kelvin: { symbol: 'K', absoluteZero: 0 }
};

function formatTemperature(value, symbol) {
  const rounded = Math.round((value + Number.EPSILON) * 100) / 100;
  const display = Number.isInteger(rounded) ? rounded.toString() : rounded.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
  return `${display}${symbol}`;
}

function toCelsius(value, unit) {
  if (unit === 'fahrenheit') return (value - 32) * 5 / 9;
  if (unit === 'kelvin') return value - 273.15;
  return value;
}

function showError(message) {
  errorMessage.textContent = message;
  results.hidden = true;
  temperatureInput.setAttribute('aria-invalid', 'true');
}

function clearError() {
  errorMessage.textContent = '';
  temperatureInput.removeAttribute('aria-invalid');
}

function updateInputSymbol() {
  inputSymbol.textContent = unitDetails[unitSelect.value].symbol;
}

unitSelect.addEventListener('change', updateInputSymbol);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const rawValue = temperatureInput.value.trim();
  const unit = unitSelect.value;

  if (rawValue === '') {
    showError('Enter a temperature before converting.');
    temperatureInput.focus();
    return;
  }

  const value = Number(rawValue);
  if (!Number.isFinite(value)) {
    showError('Enter a valid numeric temperature.');
    temperatureInput.focus();
    return;
  }

  if (value < unitDetails[unit].absoluteZero) {
    showError(`That value is below absolute zero (${unitDetails[unit].absoluteZero}${unitDetails[unit].symbol}).`);
    temperatureInput.focus();
    return;
  }

  clearError();
  const celsius = toCelsius(value, unit);
  const fahrenheit = (celsius * 9 / 5) + 32;
  const kelvin = celsius + 273.15;

  document.querySelector('#celsius-result').textContent = formatTemperature(celsius, '°C');
  document.querySelector('#fahrenheit-result').textContent = formatTemperature(fahrenheit, '°F');
  document.querySelector('#kelvin-result').textContent = formatTemperature(kelvin, ' K');
  results.hidden = false;
});
