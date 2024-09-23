document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');
    const devices = document.querySelectorAll('.device');
    const devicesContainer = document.querySelector('#venta');
    const searchResultsContainer = document.querySelector('.search-results-container');
    

    searchButton.addEventListener('click', function() {
        // Guardar el valor del campo de búsqueda
        const query = searchInput.value.toLowerCase();

        // Limpiar resultados anteriores
        resultsContainer.innerHTML = '';

        let found = false;

        // Mostrar todos los dispositivos antes de realizar una nueva búsqueda
        devices.forEach(device => {
            device.style.display = 'block';
        });

        if (query === '') {
            // Si el campo de búsqueda está vacío, mostrar todos los dispositivos
            searchResultsContainer.style.display = 'none';
            devicesContainer.style.display = 'block';
        }  else {
            devices.forEach(device => {
                const deviceName = device.querySelector('h3').innerText.toLowerCase();
                const deviceDescription = device.querySelector('p').innerText.toLowerCase();
            
                if (deviceName.includes(query) || deviceDescription.includes(query)) {
                    const result = device.cloneNode(true);
                    resultsContainer.appendChild(result); // Agregar resultado al contenedor
                    found = true;
                } else {
                    device.style.display = 'none'; // Ocultar dispositivos que no coinciden
                }
            });

            if (!found) {
                resultsContainer.innerHTML = '<p>No se encontraron resultados.</p>';
            } else {
                // Mostrar contenedor de resultados de búsqueda
                searchResultsContainer.style.display = 'block';
                devicesContainer.style.display = 'none'; // Ocultar contenedor de dispositivos
            }
        }
    });

    // Funcionalidad de búsqueda al presionar Enter
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });
});

 


