const express = require('express');
const router = express.Router();
const {
  obtenerEmpleadosController,
  obtenerEmpleadoPorIdController,
  insertarEmpleadoController,
  actualizarEmpleadoController,
  eliminarEmpleadoController
} = require('../controllers/empleadosController');

router.get('/', obtenerEmpleadosController);
router.get('/:id', obtenerEmpleadoPorIdController);
router.post('/', insertarEmpleadoController);
router.put('/:id', actualizarEmpleadoController);
router.delete('/:id', eliminarEmpleadoController);

module.exports = router;
