// admin.js

function agregarAnuncio() {
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const foto = document.getElementById('foto').files[0];
  
    const reader = new FileReader();
  
    reader.onload = function(e) {
      const fotoSrc = e.target.result;
  
      fetch('/agregar-anuncio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ titulo, descripcion, fotoSrc })
      })
      .then(response => response.text())
      .then(data => {
        alert(data);
  
        const nuevoAnuncio = document.createElement('li');
        nuevoAnuncio.innerHTML = `
          <h3>${titulo}</h3>
          <p>${descripcion}</p>
          <img src="${fotoSrc}" alt="${titulo}" style="max-width: 100px;">
        `;
        document.getElementById('lista-anuncios').appendChild(nuevoAnuncio);
  
        document.getElementById('titulo').value = '';
        document.getElementById('descripcion').value = '';
        document.getElementById('foto').value = '';
      })
      .catch(error => {
        console.error('Error:', error);
      });
    };
  
    if (foto) {
      reader.readAsDataURL(foto);
    } else {
      alert('Por favor, selecciona una foto.');
    }
  }
  