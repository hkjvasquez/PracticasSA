const Empleado = require('../models/empleadosModel');

const getEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.getAll();
        console.log('Rendimiento  obtenidos:', empleados);
        res.json(empleados);
    } catch (error) {
        console.error('Error al obtener rendimiento:', error);
        res.status(500).json({ error: 'Error al obtener rendimientos' });
    }
};

/*const insertEmpleado = async (req, res) => {
    const { nombre, puesto } = req.body;

    try {
        const result = await Empleado.insert(nombre, puesto);
        console.log('Empleado insertado con éxito:', result);
        res.status(201).json({ message: 'Empleado insertado correctamente', result });
    } catch (error) {
        console.error('Error al insertar empleado:', error);
        res.status(500).json({ error: 'Error al insertar empleado' });
    }
};*/

module.exports = { getEmpleados /*, insertEmpleado*/ };
