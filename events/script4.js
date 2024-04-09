document.getElementById('convertBtn').addEventListener('click', function() {
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;
  
  if (isNaN(amount)) {
    alert('Please enter a valid amount.');
    return;
  }

  let convertedAmount;
  if (fromCurrency === 'usd') {
    // Convertir de dólares a moneda local
    convertedAmount = amount * 500; // Tasa de cambio: 1 dólar = 500 de la moneda local
  } else {
    // Convertir de moneda local a dólares
    convertedAmount = amount / 500; // Tasa de cambio: 1 dólar = 500 de la moneda local
  }

  document.getElementById('convertedAmount').value = convertedAmount.toFixed(2);
});

document.getElementById('clearBtn').addEventListener('click', function() {
  document.getElementById('amount').value = '';
  document.getElementById('convertedAmount').value = '';
});
