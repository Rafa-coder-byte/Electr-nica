const Auth = require('./auth');
const auth = new Auth();

function login() {
  const password = document.getElementById('password').value;
  if (auth.verificarContraseñaFavorita(password)) {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('admin-options').style.display = 'block';
  } else {
    alert('Contraseña incorrecta');
  }
}
