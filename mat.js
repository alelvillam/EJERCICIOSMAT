function showSection(id) {
    // Oculta todas las secciones
    document.querySelectorAll('main section').forEach(sec => sec.classList.remove('active'));
    // Muestra la sección seleccionada
    document.getElementById(id).classList.add('active');
    // Actualiza el menú activo
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
  }