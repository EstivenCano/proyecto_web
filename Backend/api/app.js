const express = require("express")
const cors = require('cors');


//Inicializar la libreria 
const app = express()
app.use(express.json())

//Implementación de CORS 
app.use(
    cors()
)

//Información que se obtendrá en nuestra URL principal.
app.get("/",(req,res)=>{

    res.send("API Gestión de movilidad");

}); 

//Importar las rutas con los endpoints especificos


//Puerto
const port = 3001
//Levantar el servidor para escuchar los puertos
app.listen(port,() =>{
    console.log(`Escuchando API en http://localhost:${port}`)
})

