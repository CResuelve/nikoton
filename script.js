



function generarBalance() {
    const balanceAleatorio = Math.floor(Math.random() * (10000000 - 90000 + 1)) + 8000;
    const balanceFormateado = balanceAleatorio.toLocaleString('es-ES');
    document.querySelector('.balance').textContent = balanceFormateado;
}

  // Llamamos a la función al cargar la página
window.onload = generarBalance;