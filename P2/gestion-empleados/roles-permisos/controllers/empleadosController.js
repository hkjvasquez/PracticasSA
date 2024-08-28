const Empleado = require('../models/empleadosModel');


const insertEmpleado = async (req, res) => {
    const { nombre } = req.body;

    try {
        const result = await Empleado.insert(nombre);
        console.log('Rol creado con éxito:', result);
        res.status(201).json({ message: 'ROl Creado correctamente', result });
    } catch (error) {
        console.error('Error al insertar empleado:', error);
        res.status(500).json({ error: 'Error al crear empleado' });
    }
};

module.exports = { /*getEmpleados ,*/ insertEmpleado };
