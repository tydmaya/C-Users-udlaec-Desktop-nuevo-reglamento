const express = require("express");
const router = express.Router();

const Formulario = require("../models/formulario");

router.post("/formularios", async (req, res) => {
  const nuevoFormulario =  Formulario(req.body);
  nuevoFormulario
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }));
});

//get all formulario
router.get("/formularios", (req, res) => {
  Formulario.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//get all formulario
router.get("/formularios/:id", (req, res) => {
    const{ id } = req.params;
    Formulario
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//update all formulario
router.put("/formularios/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre_archivo, estado, contenido, tipo } = req.body;

  try {
    await Formulario.updateOne({ _id: id }, { $set: { nombre_archivo, estado, contenido, tipo } });
    res.json({ mensaje: "Formulario actualizado con éxito" });
  } catch (error) {
    res.json({ mensaje: error.message });
  }
});

module.exports = router;

