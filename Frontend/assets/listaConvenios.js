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
        let url = "http://127.0.0.1:3001/tarea";
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
        let url = "http://127.0.0.1:3001/tarea";
        this.$axios
          .post(url, tr)
          .then(respuesta => {
            if (respuesta.data.ok == true) {
              alert("Tarea Guardada con Éxito");
            } else {
              alert("Error al Guardar Tarea");
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
        let url = "http://127.0.0.1:3001/tarea/" + id;
        var confirmacion = confirm('¿Seguro que desea eliminar la tarea con el id ' +id + '?');
        if (confirmacion == true) {
          this.$axios
          .delete(url)
          .then(respuesta => {
            if (respuesta.data.rowCount != 0) {
              alert("Tarea Eliminada con Éxito");
            } else {
              alert("Tarea inexistente");
            }
            this.cargarLS();
          })
          .catch(error => {});
        }else {
          alert('La operación ha sido cancelada');
        }
        this.tarea = {
          id: ""
        };
      },
  
      cargarTarea({ item }) {
        let aux = this.lista_tareas.find(tarea => tarea.id == item.id);
        this.enEdicion = true;
        this.tarea = Object.assign({}, aux);
        alert("Ahora Puedes Modificar la Tarea");
      },
  
      actualizarTarea() {
        this.enEdicion = false;
        let id = this.tarea.id;
        let tr = this.tarea;
        let url = "http://127.0.0.1:3001/tarea/" + id;
        this.$axios
          .put(url, tr)
          .then(respuesta => {
            alert("Tarea Actualizada");
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
  