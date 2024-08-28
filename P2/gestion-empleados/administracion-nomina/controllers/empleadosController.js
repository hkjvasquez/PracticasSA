const { actualizarPuesto } = require('../models/empleadosModel');

const actualizarPuestoController = async (req, res) => {
  const { id } = req.params;
  const { fecha_pago } = req.body;

  if (!fecha_pago) {
    return res.status(400).json({ message: 'El campo fecha_pago es obligatorio' });
  }

  try {
    const results = await actualizarPuesto(id, fecha_pago);

    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }

    res.status(200).json({ message: 'fecha actualizada' });
  } catch (err) {
    console.error('Error al actualizar la fecha:', err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { actualizarPuestoController };
