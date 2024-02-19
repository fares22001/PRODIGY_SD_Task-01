function convertTemperature() {
  var temperature = parseFloat(document.getElementById("temperature").value);
  var unit = document.getElementById("unit").value;
  var resultElement = document.getElementById("result");

  if (isNaN(temperature)) {
    resultElement.innerText = "Please enter a valid temperature.";
    return;
  }

  var celsius, fahrenheit, kelvin;

  switch (unit) {
    case "celsius":
      celsius = temperature;
      fahrenheit = (celsius * 9) / 5 + 32;
      kelvin = celsius + 273.15;
      break;
    case "fahrenheit":
      fahrenheit = temperature;
      celsius = ((fahrenheit - 32) * 5) / 9;
      kelvin = ((fahrenheit - 32) * 5) / 9 + 273.15;
      break;
    case "kelvin":
      kelvin = temperature;
      celsius = kelvin - 273.15;
      fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;
      break;
    default:
      resultElement.innerText = "Invalid unit selected.";
      return;
  }

  resultElement.innerText = `
        Celsius: ${celsius.toFixed(2)}°C
        Fahrenheit: ${fahrenheit.toFixed(2)}°F
        Kelvin: ${kelvin.toFixed(2)}K
    `;
}
