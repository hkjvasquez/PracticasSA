const express = require('express');
const app = express();
const empleadoRoutes = require('../routes/empleadosRoutes');



app.use(express.json());  // Este middleware es necesario para parsear JSON en las solicitudes

app.use('/api', empleadoRoutes);

const PORT = 3001;

app.listen(PORT, (err) => {
    if (err) {
        console.error(`Error al iniciar el servidor:`, err);  // Log para el caso de error
    } else {
        console.log(`Servidor corriendo en el puerto ${PORT}`);  // Log para el caso de éxito
    }
});
