const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadosController');

router.post('/creacion-rol', (req, res) => {
    empleadoController.insertEmpleado(req, res)
        .then(() => {
            console.log('Solicitud POST /Rol exitoso');
        })
        .catch((error) => {
            console.error('Error en la solicitud POST /empleados:', error);
        });
});

module.exports = router;
