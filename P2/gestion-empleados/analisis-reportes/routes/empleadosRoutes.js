const express = require('express');
const router = express.Router();
const { actualizarPuestoController } = require('../controllers/empleadosController');

// Ruta para actualizar el puesto de un empleado
router.delete('/delete-reporte/:id', actualizarPuestoController);

module.exports = router;
