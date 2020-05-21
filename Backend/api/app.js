const express = require("express");
const cors = require('cors');

//Inicializar la libreria
const app = express();
app.use(express.json());

//Implementación de CORS
app.use(cors());

//Información que se obtendrá en nuestra URL principal.
app.get("/", (req, res) => {
  res.send("API Gestión de movilidad");
});

//Importar las rutas con los endpoints especificos
const rutas_aplicacion = require("./routes/aplicacion");
const rutas_tarea = require("./routes/tarea");
const rutas_seguimiento = require("./routes/seguimiento");
const rutas_divulgacion = require("./routes/divulgacion");
const rutas_convenio = require("./routes/listaConvenio");
const rutas_login = require("./routes/login");
app.use(rutas_aplicacion, rutas_tarea, rutas_seguimiento, rutas_convenio,rutas_divulgacion, rutas_login);

//Puerto
const port = 3001;

//Levantar el servidor para escuchar los puertos
app.listen(port, () => {
  console.log(`Escuchando API en http://localhost:${port}`);
});
