const express = require('express');
const bodyParser = require('body-parser');
const empleadoRoutes = require('../routes/empleadosRoutes');

const app = express();
app.use(bodyParser.json());

// Usa las rutas definidas
app.use('/api', empleadoRoutes);

// Inicia el servidor
app.listen(3005, () => {
  console.log('Servidor escuchando en el puerto 3005');
});
