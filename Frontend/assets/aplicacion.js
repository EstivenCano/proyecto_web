export default {
  beforeMount() {
    //Carga las aplicaciones antes de ser llamadas por la página.
    this.cargarLista();
    this.limpiarLista();
  },
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
        apellido: "",
        correo: "",
        id_usuario: "",
        celular: "",
        id_convenio: null,
        acciones: true
      },
      /*Parametros de formulario*/
      form: {
        nombre: "",
        apellido: "",
        correo: "",
        id_usuario: "",
        celular: "",
        id_convenio: null,
        acciones: true

      },

      /*Opciones de convenio en la lista desplegable*/
      convenios: [{
          text: "Selecciona un convenio",
          value: null
        },
        {
          text: "Movilidad",
          value: 1
        }, {
          text: "Intercambio",
          value: 2
        },
        {
          text: "Investigación",
          value: 3
        }
      ],
      show: true
    };
  },
  /*Métodos*/
  methods: {

    //Toma los datos del formulario.
    datosFormulario() {

      this.form = {
      
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        correo: document.getElementById('correo').value,
        id_usuario: document.getElementById('id_usuario').value,
        celular: document.getElementById('celular').value,
        id_convenio: document.getElementById('id_convenio').value,
        estado_aplicacion: "Enviado",
        acciones: true
      }
      return this.form;
    },

    //Carga la lista de las aplicaciones desde la base de datos
    cargarLista() {
      let url = 'http://localhost:3001/aplicacion';
      this.loading = true;
      //Trae todos los marcadores desde la base de datos.
      this.$axios
        .get(url)
        .then(response => {
          //Asigna los marcadores al array de marcadores global para ser enlistados.
          this.aplicaciones = response.data.info;
          this.ordenarAsc(this.aplicaciones, 'nombre');

        })
        .catch(error => {
          console.log(error);
        });

    },

    //Guarda la aplicación que fue ingresada en la página.
    guardarAplicacion() {
      let url = 'http://localhost:3001/aplicacion'
      this.$axios.post(url, this.datosFormulario()).then(respuesta => {
        //Recarga los marcadores de la base de datos.
        alert("Aplicación guardada con éxito")
        this.cargarLista();
        //Reestablece los campos del formulario.
        this.limpiarLista();
      }).catch(error => {

      });
    },

    //Elimina el marcador seleccionado. 
    eliminarAplicacion({
      item
    }) {
      let url = `http://localhost:3001/aplicacion/${item.id}`

      var opcion = confirm(`¿Desea eliminar la aplicación ${item.nombre}?`);
      if (opcion == true) {
        this.$axios.delete(url, this.datosFormulario()).then(respuesta => {
          this.cargarLista();
          alert(`La aplicación ${item.id} ha sido eliminada`);
        }).catch(error => {});
      } else {
        alert(`La operación ha sido cancelada`);
      }
    },


    /*Llena los campos del formulario con los datos de la aplicación para luego ser editados, según la fila
    en que se encuentre*/
    modificarAplicacion({
      item
    }) {

      this.form.id = item.id
      this.form.nombre = item.nombre;
      this.form.apellido = item.apellido;
      this.form.correo = item.correo;
      this.form.celular = item.celular;
      this.form.id_usuario = item.id_usuario;
      this.form.id_convenio = item.id_convenio;
      this.item = item;
      this.enEdicion = true;
    },

    //Actualiza el elemento seleccionado con los datos ingresados.
    actualizarAplicacion() {

      //Elemento que será el body enviado en el put
      let actualizado = {
        id: this.item.id,
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        correo: document.getElementById('correo').value,
        id_usuario: document.getElementById('id_usuario').value,
        celular: document.getElementById('celular').value,
        id_convenio: document.getElementById('id_convenio').value,
        estado_aplicacion: "Enviado",
        acciones: true
      }

      //Actualiza el elemento con el id ingresado en la url.
      let url = `http://localhost:3001/aplicacion/${this.item.id}`
      this.$axios.put(url, actualizado).then(respuesta => {
        //Alerta de éxito.
        alert(`La aplicación ${this.item.id} ha sido actualizada`);
        //Reestablece el objeto.
        this.item = {};
        //Cambia el estado de edición, y con ello la visibilidad del botón. 
        this.enEdicion = false;
        this.cargarLista();
        this.cancelarEdicion();
      }).catch(error => {
        //Alerta de error.
        alert(`No pudo actualizarse la aplicación, error: ${error}`)
        this.item = {};
        this.enEdicion = false;
      });

    },

    //Cancela la edición de la aplicación.
    cancelarEdicion(){
      this.form.id = "";
      this.form.nombre = "";
      this.form.apellido = "";
      this.form.correo = "";
      this.form.celular = "";
      this.form.id_usuario = "";
      this.form.id_convenio = null;
      this.enEdicion =false;
      this.item = {};

    },

    //Limpia los campos del formulario.
    limpiarLista() {
      this.form.id = "";
      this.form.nombre = "";
      this.form.apellido = "";
      this.form.correo = "";
      this.form.celular = "";
      this.form.id_usuario = "";
      this.form.id_convenio = null;
    },

    //Ordenar array de aplicaciones para ser enlistados.
    ordenarAsc(p_array_json, p_key) {
      p_array_json.sort(function (a, b) {
        return a[p_key] > b[p_key];
      });
    },

    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
      this.guardarAplicacion();
    },
    /*Limpia los campos del formulario*/
    onReset(evt) {
      evt.preventDefault();
      // Reestablece los valores del formulario
      this.limpiarLista();
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
