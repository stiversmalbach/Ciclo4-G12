const express = require("express");
const conectarDB = require("./config/db"); 
const usuarioRoutes = require("./routes/usuarioRoutes");
const auth = require("./routes/auth");

const app = express();
app.use(express.json({ extended: true}));

conectarDB();

//rutas
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/auth", auth );


app.listen(4000, () =>{
    console.log("servidor corriendo en el puerto 4000");
});