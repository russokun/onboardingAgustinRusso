document.getElementById('calculateBtn').addEventListener('click', function() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  if (isNaN(weight) || isNaN(height)) {
    alert('Please enter valid values for weight and height.');
    return;
  }

  const bmi = calculateBMI(weight, height);
  document.getElementById('bmiResult').value = bmi.toFixed(2);
});

function calculateBMI(weight, height) {
  const heightInMeters = height / 100; // Convertir altura de cm a m
  return weight / (heightInMeters * heightInMeters);
}

