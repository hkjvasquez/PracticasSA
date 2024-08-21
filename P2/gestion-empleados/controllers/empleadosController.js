const Empleado = require('../models/empleadosModel');

const getEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.getAll();  // Asegúrate de que esta función retorne una promesa
        console.log('Consulta exitosa:', empleados);
        res.json(empleados);
    } catch (error) {
        console.error('Error al obtener empleados:', error);
        res.status(500).json({ error: 'Error al obtener empleados' });
    }
};

module.exports = { getEmpleados };


