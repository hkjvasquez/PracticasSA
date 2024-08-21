const express = require('express');
const app = express();
const empleadoRoutes = require('../routes/empleadosRoutes');

app.use('/api', empleadoRoutes);

const PORT = 3000;

app.listen(PORT, (err) => {
    if (err) {
        console.error(`Error al iniciar el servidor:`, err);  // Log para el caso de error
    } else {
        console.log(`Servidor corriendo en el puerto ${PORT}`);  // Log para el caso de éxito
    }
});
