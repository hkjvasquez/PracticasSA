const connection = require('../config/db');

const actualizarPuesto = async (id, fecha_pago) => {
  try {
    const [results] = await connection.query('UPDATE nomina SET fecha_pago = ? WHERE id = ?', [fecha_pago, id]);
    return results;
  } catch (err) {
    throw err;
  }
};

module.exports = { actualizarPuesto };
