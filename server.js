const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const path = require('path');
const fs = require('fs');


app.post('/add-product', upload.single('foto'), (req, res) => {
  try{
  const { nombre, descripcion } = req.body;
  const foto = req.file;

  // Save product to database or file system
  // For demonstration purposes, we'll just save it to a file
  const products = require('./products.json');
  products.push({ nombre, descripcion, foto: foto.filename });
  fs.writeFileSync('products.json', JSON.stringify(products, null, 2));

  res.render('mensaje', { mensaje: 'Producto agregado con éxito!' });
    res.redirect('/venta');
} 
  catch (error) {
    
    res.status(500).send('Error al agregar producto');
}
});

app.get('/venta', (req, res) => {
  console.log('Devuelve el archivo venta.html');
  res.sendFile(path.join(__dirname, 'venta.html'));
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});  