function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
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
