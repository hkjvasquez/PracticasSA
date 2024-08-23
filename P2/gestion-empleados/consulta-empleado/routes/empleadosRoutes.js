const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadosController');

router.get('/empleados', (req, res) => {
    empleadoController.getEmpleados(req, res)
        .then(() => {
            console.log('Solicitud GET /empleados exitosa');
        })
        .catch((error) => {
            console.error('Error en la solicitud GET /empleados:', error);
        });
});

/*router.post('/empleados', (req, res) => {
    empleadoController.insertEmpleado(req, res)
        .then(() => {
            console.log('Solicitud POST /empleados exitosa');
        })
        .catch((error) => {
            console.error('Error en la solicitud POST /empleados:', error);
        });
});*/

module.exports = router;
