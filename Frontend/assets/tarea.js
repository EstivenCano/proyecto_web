export default {
  data() {
    return {
      enEdicion: false,
      lista_tareas: [],
      tarea: {
        id: "",
        nombre: "",
        descripcion: "",
        modulo: "",
        acciones: true
      },
      show: true
    };
  },
  methods: {
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.tarea.id = "";
      this.tarea.nombre = "";
      this.tarea.descripcion = "";
      this.tarea.estado = null;
    },

    cargarLS() {
      let url = "http://127.0.0.1:3001/tarea";
      this.$axios
        .get(url)
        .then(respuesta => {
          this.lista_tareas = respuesta.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    crearTarea() {
      let tr = this.tarea;
      let url = "http://127.0.0.1:3001/tarea";
      this.$axios
        .post(url, tr)
        .then(respuesta => {})
        .catch(error => {});
      this.tarea = {
        id: "",
        nombre: "",
        descripcion: "",
        modulo: "",
        acciones: true
      };
    },

    eliminarTarea() {
      let id = this.tarea.id;
      let url = "http://127.0.0.1:3001/tarea/" + id;
      this.$axios
        .delete(url)
        .then(respuesta => {})
        .catch(error => {});
      this.tarea = {
        id: ""
      };
    },

    cargarTarea({ item }) {
      let aux = this.lista_tareas.find(tarea => tarea.id == item.id);
      this.enEdicion = true;
      this.tarea = Object.assign({}, aux);
    },

    actualizarTarea() {
      this.enEdicion = false;
      let id = this.tarea.id;
      let tr = this.tarea;
      let url = "http://127.0.0.1:3001/tarea/" + id;
      this.$axios
        .put(url, tr)
        .then(respuesta => {})
        .catch(error => {});
      this.tarea = {
        id: "",
        nombre: "",
        descripcion: "",
        modulo: "",
        acciones: true
      };
    }
  }
};
