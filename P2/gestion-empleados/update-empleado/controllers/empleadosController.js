const { actualizarPuesto } = require('../models/empleadosModel');

const actualizarPuestoController = async (req, res) => {
  const { id } = req.params;
  const { puesto } = req.body;

  if (!puesto) {
    return res.status(400).json({ message: 'El campo puesto es obligatorio' });
  }

  try {
    const results = await actualizarPuesto(id, puesto);

    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }

    res.status(200).json({ message: 'Puesto actualizado' });
  } catch (err) {
    console.error('Error al actualizar el puesto:', err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { actualizarPuestoController };
