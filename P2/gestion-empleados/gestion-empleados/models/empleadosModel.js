const connection = require('../config/db');

// Obtener todos los empleados
const obtenerEmpleados = async () => {
  const [rows] = await connection.query('SELECT * FROM empleados');
  return rows;
};

// Obtener empleado por ID
const obtenerEmpleadoPorId = async (id) => {
  const [rows] = await connection.query('SELECT * FROM empleados WHERE id = ?', [id]);
  return rows[0];
};

// Insertar un nuevo empleado
const insertarEmpleado = async (nombre, puesto, salario, fecha_contratacion) => {
  const [result] = await connection.query(
    'INSERT INTO empleados (nombre, puesto, salario, fecha_contratacion) VALUES (?, ?, ?, ?)',
    [nombre, puesto, salario, fecha_contratacion]
  );
  return result.insertId;
};

// Actualizar datos de un empleado
const actualizarEmpleado = async (id, nombre, puesto, salario, fecha_contratacion) => {
  const [result] = await connection.query(
    'UPDATE empleados SET nombre = ?, puesto = ?, salario = ?, fecha_contratacion = ? WHERE id = ?',
    [nombre, puesto, salario, fecha_contratacion, id]
  );
  return result.affectedRows;
};

// Eliminar un empleado
const eliminarEmpleado = async (id) => {
  const [result] = await connection.query('DELETE FROM empleados WHERE id = ?', [id]);
  return result.affectedRows;
};

module.exports = { obtenerEmpleados, obtenerEmpleadoPorId, insertarEmpleado, actualizarEmpleado, eliminarEmpleado };
