export default {
    data() {
      return {
        convenios : [],
        entidad: {
            id: "",
            nombre:"",
            direccion:"",
            pagina_web:"",
            nit:"",
            pais:"",
            departamento:"",
            ciudad:"",
            acciones: true
        },
        
      show: true
      };
    },
    methods: {
        crearConsulta(){
            this.entidad={
                pais: document.getElementById("pais").value,
                ciudad: document.getElementById("ciudad").value,
                nombre: document.getElementById("entidad").value,
            }
        },

        comprobarExistenciaDelPais(){
            this.crearConsulta();
            let existePais = this.convenios.find(x => this.listaFiltrada.pais === x.pais)
            if(!existePais){
                alert('El pais seleccionado no esta registrado o ha sido copiado de manera ERRONEA');
                return false;
            }else{
                return true;
            }
        },
        comprobarExistenciaDeLaCiudad(){
            this.crearConsulta();
            let existeCiudad = this.convenios.find(x => this.listaFiltrada.ciudad === x.ciudad)
            if(!existeCiudad){
                alert('La ciudad seleccionada no esta registrada o ha sido copiado de manera ERRONEA, recuerda colocar la primera letra con mayuscula y las demas en minuscula');
                return false;
            }else{
                return true;
            }
        },
        comprobarExistenciaDeLaEntidad(){
            this.crearConsulta();
            let existeEntidad = this.convenios.find(x => this.listaFiltrada.nombre === x.nombre)
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