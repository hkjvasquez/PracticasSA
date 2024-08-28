const express = require('express');
const router = express.Router();
const { actualizarPuestoController } = require('../controllers/empleadosController');

// Ruta para actualizar el puesto de un empleado
router.put('/actuliza-fpago/:id', actualizarPuestoController);

module.exports = router;
