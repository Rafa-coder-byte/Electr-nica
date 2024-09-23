// Función para cargar el contenido de la barra lateral
function loadSidebar() {
    fetch('sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            // Asegúrate de que el botón de toggle esté disponible después de cargar el sidebar
            const toggleBtn = document.getElementById('toggle-btn');
            const sidebar = document.getElementById('sidebar');

            // Adjunta el evento de clic al botón de toggle
            toggleBtn.addEventListener('click', function() {
                if (sidebar.style.left === '-250px' || sidebar.style.left === '') {
                    sidebar.style.left = '0';
                } else {
                    sidebar.style.left = '-250px';
                }
            });

            // Nueva función para cerrar la barra lateral al hacer clic fuera de ella
            document.addEventListener('click', function(event) {
                const isClickInside = sidebar.contains(event.target) || toggleBtn.contains(event.target);

                if (!isClickInside) {
                    sidebar.style.left = '-250px';
                }
            });
        });
}

document.addEventListener('DOMContentLoaded', loadSidebar);

