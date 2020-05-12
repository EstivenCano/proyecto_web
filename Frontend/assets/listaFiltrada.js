export default {
    data() {
      return {

          lista_convenios : [
              {
                  id :  " 0001 " ,
                  nombre: "Universidad de medellin",
                  direccion: "carrera 87 # 30-65",
                  pagina_web: "http://www.udem.edu.co/",
                  nit: "",
                  pais :  "Colombia " ,
                  departamento: "Antioquia",
                  ciudad :  " Medellin " ,
                  seleccionar: ""
              }
          ],
        
  
      show: true
      };
    },
    methods: {
      comprobarExistenciaDelPais(){
          let existePais = this.lista_convenios.find(x => this.listaFiltrada.pais === x.pais)
              if(!existePais){
                  alert('El pais seleccionado no esta registrado o ha sido copiado de manera ERRONEA, recuerda colocar la primera letra con mayuscula y las demas en minuscula');
                  return false;
              }else{
                  return true;
              }
      },
      comprobarExistenciaDeLaCiudad(){
          let existeCiudad = cm_entidades.find(x => this.listaFiltrada.ciudad === x.ciudad)
              if(!existeCiudad){
                  alert('La ciudad seleccionada no esta registrada o ha sido copiado de manera ERRONEA, recuerda colocar la primera letra con mayuscula y las demas en minuscula');
                  return false;
              }else{
                  return true;
              }
  
      },
      comprobarExistenciaDeLaEntidad(){
          let existeEntidad = cm_entidades.find(x => this.listaFiltrada.nombre === x.nombre)
          if(!existeEntidad){
              alert('La entidad seleccionada no esta registrada o ha sido copiada de manera ERRONEA, recuerda colocar la primera letra con mayuscula y las demas en mnuscula');
              return false;
          }else{
              return true;
          }
      },
  
      listarConveniosPais(pais){
        this.listarConveniosPais((items)=> items.pais.includes(this.pais));
      },
      listarConveniosCiudad(ciudad){
        this.listarConveniosPais((items)=> items.ciudad.includes(this.ciudad));
      },
      listarConveniosUniversidad(universidad){
        this.listarConveniosPais((items)=> items.universidad.includes(this.universidad));
      }
    }
  };