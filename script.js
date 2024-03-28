function calculateTip() {
  var billAmount = parseFloat(document.getElementById('bill').value);
  var serviceQuality = parseInt(document.getElementById('service-quality').value);
  var numPeople = parseInt(document.getElementById('num-people').value);

  var tipPerPerson = (billAmount * (serviceQuality / 100)) / numPeople;
  
  var tipResultElement = document.getElementById('tip-result');
  tipResultElement.textContent = "Tip per person: $" + tipPerPerson.toFixed(2);
}
