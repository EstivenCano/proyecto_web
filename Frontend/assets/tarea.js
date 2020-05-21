
export default {
  data() {
    return {
      enEdicion: false,
      cargada: false,
      lista_tareas: [],
      fields: ["id", "nombre", "descripcion", "modulo", "acciones"],
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
      this.tarea.modulo = "";
    },

    cargarLS() {
      let url = "https://gestion-movilidad-api.herokuapp.com/tarea";
      this.$axios
        .get(url)
        .then(respuesta => {
          this.lista_tareas = respuesta.data;
          this.cargada = true;
        })
        .catch(error => {
          console.log(error);
        });
    },

    crearTarea() {
      let tr = this.tarea;
      let url = "https://gestion-movilidad-api.herokuapp.com/tarea";
      this.$axios
        .post(url, tr)
        .then(respuesta => {
          if (respuesta.data.ok == true) {
            this.$swal.fire({
              title: 'Éxito!',
              text: 'Tarea guardada exitosamente.',
              type: 'success',
              timer: 2500
            })         
          } else {
            this.$swal.fire({
              title: 'Error',
              text: 'No se pudo guardar la tarea.',
              type: 'success',
              timer: 2500
            })
          }
          this.cargarLS();
        })
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
      let url = "https://gestion-movilidad-api.herokuapp.com/tarea/" + id;
  
      this.$swal.fire({
        title: "Precaución",
        text: "¿Desea eliminar la tarea?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Eliminar',
        cancelButtonText: 'No, Cancelar',
        reverseButtons: true
      }).then(r => {
        if (r.value) {
          this.$axios
        .delete(url)
        .then(respuesta => {
          if (respuesta.data.rowCount != 0) {
            this.$swal.fire({
              title: 'Eliminada!',
              text: 'La tarea ha sido eliminada correctamente.',
              type: 'success',
              timer: 3000
            })
          } else {
            this.$swal.fire({
              title: 'Error',
              text: 'Tarea inexistente.',
              type: 'error',
              timer: 3000
            })
          }
          this.cargarLS();
        })
        .catch(error => {});
          
        } else {
          this.$swal.fire({
            title: 'Cancelada',
            text: 'La operación ha sido cancelada',
            type: 'error',
            timer: 3000
          })
        }
      });

      this.tarea = {
        id: ""
      };
    },

    cargarTarea({ item }) {
      let aux = this.lista_tareas.find(tarea => tarea.id == item.id);
      this.enEdicion = true;
      this.tarea = Object.assign({}, aux);
      this.$swal.fire({
        title: 'Mensaje',
        text: 'Anora puedes modificar la tarea.',
        timer: 1500
      })
    },

    actualizarTarea() {
      this.enEdicion = false;
      let id = this.tarea.id;
      let tr = this.tarea;
      let url = "https://gestion-movilidad-api.herokuapp.com/tarea/" + id;
      this.$axios
        .put(url, tr)
        .then(respuesta => {
          this.$swal.fire({
            title: 'Actualización',
            text: 'Tarea actualizada exitosamente.',
            type: 'success',
            timer: 2500
          })
          this.cargarLS();
        })
        .catch(error => {});
      this.tarea = {
        id: "",
        nombre: "",
        descripcion: "",
        modulo: "",
        acciones: true
      };
    },

    cancelarEdicion(){
      this.tarea.id = "";
      this.tarea.nombre = "";
      this.tarea.descripcion = "";
      this.tarea.modulo = "";
      this.enEdicion = false;
    }
  }
};
