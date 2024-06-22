const convertBtn = document.getElementById('convert-btn');
convertBtn.addEventListener('click', convertTemperature);

function convertTemperature() {
  const tempInput = document.getElementById('temp-input');
  const unitSelector = document.getElementById('unit-selector');
  const resultDisplay = document.getElementById('result-display');

  const temperature = parseFloat(tempInput.value);
  const unit = unitSelector.value;

  if (isNaN(temperature)) {
    resultDisplay.textContent = "Please enter a valid number";
    return;
  }

  let convertedTemp;
  let convertedUnit;

  if (unit === 'celsius') {
    convertedTemp = temperature * 1.8 + 32;
    convertedUnit = 'Fahrenheit';
  } else {
    convertedTemp = (temperature - 32) / 1.8;
    convertedUnit = 'Celsius';
  }

  resultDisplay.textContent = `${convertedTemp.toFixed(2)} ${convertedUnit}`;
}
