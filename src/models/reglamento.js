const mongoose = require("mongoose");
const reglamentoSchema = mongoose.Schema({
    nombre_archivo: String,estado:Boolean,contenido:String,
    tipo: {
      type: String,
      enum: ["Interno", "Seguridad"]
    },
  
  });
  
  // Crear un modelo basado en el esquema para los reglamentos
  module.exports = mongoose.model("Reglamento", reglamentoSchema);
  