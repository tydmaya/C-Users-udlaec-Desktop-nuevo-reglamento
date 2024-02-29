const express = require("express");
const router = express.Router();

const Reglamento = require("../models/reglamento");

router.post("/reglamentos", async (req, res) => {
  const nuevoReglamento =  Reglamento(req.body); // Se corrige la línea 7
  nuevoReglamento
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }));
});

//get all reglamento
router.get("/reglamentos", (req, res) => {
  Reglamento
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//get all reglamento
router.get("/reglamentos/:id", (req, res) => {
    const{ id } = req.params;
    Reglamento
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//update all reglamento
router.put("/reglamentos/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre_archivo, estado, contenido, tipo } = req.body;

  try {
    await Reglamento.updateOne({ _id: id }, { $set: { nombre_archivo, estado, contenido, tipo } });
    res.json({ mensaje: "Reglamento actualizado con éxito" });
  } catch (error) {
    res.json({ mensaje: error.message });
  }
});

module.exports = router;

