require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const reglamentoRouter = require ('./routes/reglamento')
const formularioRouter = require ('./routes/formulario')


const app = express();
const port = 3000
//mid
app.use(express.json())
app.use('/api',reglamentoRouter)
app.use('/api',formularioRouter)

//routes
app.get('/', (req, res) => {
    res.send("regulations")

})
// conexion mongo
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("connected")).catch((error) => console.error(error))
app.listen(port, () => console.log("serverconnect", port))

