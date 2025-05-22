function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu && menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else if (menu) {
    menu.style.display = 'flex';
  }
}

function cotizar() {
  const kg = parseFloat(document.getElementById('peso').value);
  const modalidad = document.getElementById('modalidad').value;
  const base = modalidad === 'urgente' ? 12 : 8; // precio por kg aproximado
  const precio = kg * base;
  document.getElementById('resultado').textContent = `Precio estimado: USD ${precio.toFixed(2)}`;
}

function buscarGuia() {
  const guia = document.getElementById('guia').value;
  document.getElementById('track-result').textContent = `Estado de la guía ${guia}: En preparación (demo)`;
}

async function handleRegister(e) {
  e.preventDefault();
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const resp = await fetch('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await resp.json();
  const msg = document.getElementById('register-msg');
  if (resp.ok) {
    msg.textContent = 'Registro exitoso, puedes iniciar sesión.';
  } else {
    msg.textContent = data.error || 'Error al registrarse';
  }
}

async function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const resp = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await resp.json();
  const msg = document.getElementById('login-msg');
  if (resp.ok) {
    msg.textContent = 'Ingreso exitoso';
    localStorage.setItem('token', data.token);
  } else {
    msg.textContent = data.error || 'Credenciales inválidas';
  }
}

if (document.getElementById('register-form')) {
  document.getElementById('register-form').addEventListener('submit', handleRegister);
}

if (document.getElementById('login-form')) {
  document.getElementById('login-form').addEventListener('submit', handleLogin);
}
