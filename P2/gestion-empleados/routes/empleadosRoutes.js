const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadosController');

router.get('/empleados', async (req, res) => {
    try {
        await empleadoController.getEmpleados(req, res);
        console.log('Solicitud GET /empleados exitosa');  // Log para el caso de éxito
    } catch (error) {
        console.error('Error en la solicitud GET /empleados:', error);  // Log para el caso de error
    }
});

module.exports = router;

