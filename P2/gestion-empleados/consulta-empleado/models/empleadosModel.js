const db = require('../config/db'); // Importa la conexión desde db.js

const empleadosModel = {
    getAll: async () => {
        try {
            const [rows] = await db.query('SELECT * FROM empleados');
            console.log('Consulta exitosa:', rows);
            return rows;
        } catch (error) {
            console.error('Error al consultar empleados:', error);
            throw error;
        }
    },

   /* insert: async (nombre, puesto) => {
        try {
            const [result] = await db.query('INSERT INTO empleados (nombre, puesto) VALUES (?, ?)', [nombre, puesto]);
            console.log('Empleado insertado con éxito:', result);
            return result;
        } catch (error) {
            console.error('Error al insertar empleado:', error);
            throw error;
        }
    },*/

    // Otros métodos del modelo...
};

module.exports = empleadosModel;  // Asegúrate de exportar correctamente el objeto
