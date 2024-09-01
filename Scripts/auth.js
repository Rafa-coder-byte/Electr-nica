function validatePin() {
    const pin = document.getElementById('pin').value;
    const correctPin = '1234'; // Reemplaza con tu PIN deseado
    if (pin === correctPin) {
      document.getElementById('login-form').classList.add('hidden');
      document.getElementById('add-product-form').classList.remove('hidden');
    } else {
      const errorMessage = 'PIN incorrecto';
      document.getElementById('error-message').innerText = errorMessage;
      document.getElementById('error-message').classList.remove('hidden');
    }
  }