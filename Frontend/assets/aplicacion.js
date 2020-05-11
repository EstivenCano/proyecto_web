export default {

  data() {
    return {
      /*Determina si la aplicación se encuentra en estado de edición*/
      enEdicion: false,
      /*Array de aplicaciones*/
      aplicaciones: [],
      /*Objeto de aplicaciones*/
      aplicacion: {
        id: "",
        nombre: "",
        apellido:"",
        correo: "",
        celular: "",
        convenio: null,
        acciones: true
      },
      /*Parametros de formulario*/
      form: {
        correo: "",
        nombre: "",
        apellido:"",
        id_usuario: "",
        celular: "",
        convenio: null
      },

      /*Opciones de convenio en la lista desplegable*/
      convenios: [{
          text: "Selecciona un convenio",
          value: null
        },
        "Movilidad",
        "Intercambio",
        "Proyecto de investigación"
      ],
      show: true
    };
  },
  /*Métodos*/
  methods: {
    /*Llama el JSON almacenado en el localStorage y lo convierte a array(aplicaciones)*/
    recargarAplicaciones() {
      var personJSONFromLS = localStorage.getItem("aplistorage");
      var personFromLS = JSON.parse(personJSONFromLS);

      this.aplicaciones = personFromLS;
    },

    /*Almacena los datos obtenidos del formulario en un objeto aplicacion y lo guarda en el array(aplicaciones)*/
    crearAplicacion() {
      
      this.aplicacion = {
        id: document.getElementById("id_usuario").value,
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value,
        convenio: document.getElementById("convenio").value,
        acciones: true
      };

      let existe = this.aplicaciones.find(x => this.aplicacion.id === x.id)
      if (existe) {
          alert('El usuario ya esta registrado o el id ya existe');
          return;
      }else{
        this.aplicaciones.push(this.aplicacion);
        /*Convierte el array aplicaciones en un JSON y lo almacena en el localStorage*/
        var jsonPerson = JSON.stringify(this.aplicaciones);
        localStorage.setItem("aplistorage", jsonPerson);
      }
    },
    /*Busca la posicion del objeto dentro del array y lo elimina*/
    eliminarAplicacion({
      item
    }) {
      let posicion = this.aplicaciones.findIndex(
        aplicacion => aplicacion.id == item.id
      );
      this.aplicaciones.splice(posicion, 1);
    },
    /*Llena los campos del formulario con los datos de la aplicacion para luego ser editados, segun la fila
    en que se encuentre*/
    cargarAplicacion({
      item
    }) {
      let apli = this.aplicaciones.find(aplicacion => aplicacion.id == item.id);
      this.aplicacion = Object.assign({}, apli);
      this.form.id_usuario = apli.id;
      this.form.email = apli.correo;
      this.form.telefono = apli.telefono;
      this.form.name = apli.nombre;
      this.form.convenio = apli.convenio;
      /*Cambia el estado de edicion, para hacer visible el boton Actualizar*/
      this.enEdicion = true;
    },

    /*Toma la posicion de la aplicacion en el array y lo reemplaza por el objeto modificado*/
    actualizarAplicacion() {

      let posicion = this.aplicaciones.findIndex(
        aplicacion => aplicacion.id == this.aplicacion.id
      );
      
      this.aplicaciones.splice(posicion, 1);

      this.enEdicion = false;
    },

    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    /*Limpia los campos del formulario*/
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.telefono = "";
      this.form.id_usuario = "";
      this.form.convenio = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
