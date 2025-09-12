const listaCarrito = document.getElementById('lista-carrito');

function agregarProducto(nombreProducto) {
  // Quitar mensaje "No hay productos"
  if (listaCarrito.children.length === 1 && listaCarrito.children[0].textContent === 'No hay productos') {
    listaCarrito.innerHTML = '';
  }

  // Crear item de carrito
  const li = document.createElement('li');
  li.className = 'list-group-item agregado';
  li.textContent = nombreProducto;

  listaCarrito.appendChild(li);

  // Efecto de agregado
  setTimeout(() => li.classList.remove('agregado'), 1000);
}

function eliminarProducto() {
  const items = listaCarrito.getElementsByTagName('li');
  if (items.length > 0) {
    const ultimo = items[items.length - 1];
    ultimo.classList.add('eliminado');
    setTimeout(() => {
      ultimo.remove();
      if (listaCarrito.children.length === 0) {
        const liVacio = document.createElement('li');
        liVacio.className = 'list-group-item text-muted text-center';
        liVacio.textContent = 'No hay productos';
        listaCarrito.appendChild(liVacio);
      }
    }, 500);
  }
}
