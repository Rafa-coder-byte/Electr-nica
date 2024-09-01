document.addEventListener('DOMContentLoaded', () => {


document.getElementById('search-button').addEventListener('click', function() {
    // Guardar el valor del campo de búsqueda
    const query = document.getElementById('search-input').value.toLowerCase();
    localStorage.setItem('searchQuery', query);

    // Recargar la página
    location.reload();
});


// JavaScript code
window.addEventListener('load', function() {
    const query = localStorage.getItem('searchQuery');
    if (query) {
      const resultsContainer = document.getElementById('search-results');
      const devices = document.querySelectorAll('.device');
      const devicesContainer = document.querySelector('.devices-container');
      const searchResultsContainer = document.querySelector('.search-results-container');
  
      // Clear previous results
      resultsContainer.innerHTML = '';
  
      let found = false;
  
      devices.forEach(device => {
        const deviceName = device.querySelector('h3').innerText.toLowerCase();
        const deviceDescription = device.querySelector('p').innerText.toLowerCase();
  
        if (deviceName.includes(query) || deviceDescription.includes(query)) {
          const result = device.cloneNode(true);
          resultsContainer.appendChild(result);
          found = true;
        } else {
          device.style.display = 'none'; // or device.remove() to remove the element entirely
        }
      });
  
      if (!found) {
        resultsContainer.innerHTML = '<p>No se encontraron resultados.</p>';
      } else {
        // Show search results container
        searchResultsContainer.style.display = 'block';
        devicesContainer.style.display = 'none'; // hide devices container
      }
  
      // Show header and footer
      header.style.display = 'block';
      footer.style.display = 'block';
  
      // Clear localStorage
      localStorage.removeItem('searchQuery');
    }
  });

  // También puedes agregar la funcionalidad de búsqueda al presionar Enter
document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('search-button').click();
    }
});
});