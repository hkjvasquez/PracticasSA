const {
    obtenerEmpleados,
    obtenerEmpleadoPorId,
    insertarEmpleado,
    actualizarEmpleado,
    eliminarEmpleado
  } = require('../models/empleadosModel');
  
  // Obtener todos los empleados
  const obtenerEmpleadosController = async (req, res) => {
    try {
      const empleados = await obtenerEmpleados();
      res.json(empleados);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Obtener un empleado por ID
  const obtenerEmpleadoPorIdController = async (req, res) => {
    const { id } = req.params;
    try {
      const empleado = await obtenerEmpleadoPorId(id);
      if (!empleado) {
        return res.status(404).json({ message: 'Empleado no encontrado' });
      }
      res.json(empleado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Insertar un nuevo empleado
  const insertarEmpleadoController = async (req, res) => {
    const { nombre, puesto, salario, fecha_contratacion } = req.body;
    try {
      const id = await insertarEmpleado(nombre, puesto, salario, fecha_contratacion);
      res.status(201).json({ id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Actualizar datos de un empleado
  const actualizarEmpleadoController = async (req, res) => {
    const { id } = req.params;
    const { nombre, puesto, salario, fecha_contratacion } = req.body;
    try {
      const affectedRows = await actualizarEmpleado(id, nombre, puesto, salario, fecha_contratacion);
      if (affectedRows === 0) {
        return res.status(404).json({ message: 'Empleado no encontrado' });
      }
      res.json({ message: 'Empleado actualizado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Eliminar un empleado
  const eliminarEmpleadoController = async (req, res) => {
    const { id } = req.params;
    try {
      const affectedRows = await eliminarEmpleado(id);
      if (affectedRows === 0) {
        return res.status(404).json({ message: 'Empleado no encontrado' });
      }
      res.json({ message: 'Empleado eliminado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    obtenerEmpleadosController,
    obtenerEmpleadoPorIdController,
    insertarEmpleadoController,
    actualizarEmpleadoController,
    eliminarEmpleadoController
  };
  