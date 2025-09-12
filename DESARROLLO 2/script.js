// Simulación carrito
document.querySelectorAll('.btn-warning').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Producto agregado al carrito');
  });
});
