function addProduct() {
  const nombre = document.getElementById('nombre').value;
  const descripcion = document.getElementById('descripcion').value;
  const foto = document.getElementById('foto').files[0];

  const formData = new FormData();
  formData.append('nombre', nombre);
  formData.append('descripcion', descripcion);
  formData.append('foto', foto);
/*
  fetch('/add-product', {
      method: 'POST',
      body: formData
  })

  .then(response => {
    if (response.ok) {
      response.json().then(data => {
        console.log(data);*/
        window.location.href = 'venta.html';
  /*    });
    } 
    else {
      console.error('Error al enviar el formulario:', response.status);
    }
     })
  .catch(error => console.error('Error al enviar el formulario:', error));
  }*/