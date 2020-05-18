export default {
  data() {
    return {
      enEdicion: false,
      cargada: false,
      cargada1: false,
      lista_seguimientos: [],
      lista_aplicaciones: [],
      fields: [
        "id",
        "id_aplicacion",
        "fecha",
        "comentario",
        "estado",
        "acciones"
      ],
      fields2: [
        "id",
        "nombre",
        "apellido",
        "correo",
        "id_convenio",
        "acciones"
      ],
      seguimiento: {
        id: "",
        id_aplicacion: "",
        fecha: "",
        comentario: "",
        archivo: null,
        estado: null,
        acciones: true
      },
      aplicacion: {
        id: "",
        nombre: "",
        apellido: "",
        correo: "",
        id_usuario: "",
        celular: "",
        id_convenio: null
      },
      estados: [
        {
          text: "Selección de concepto",
          value: null
        },
        {
          text: "Aprobado",
          value: 1
        },
        {
          text: "Rechazado",
          value: 2
        }
      ],
      show: true
    };
  },
  methods: {
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.seguimiento.id = "";
      this.seguimiento.id_aplicacion = "";
      this.seguimiento.fecha = "";
      this.seguimiento.comentario = "";
      this.seguimiento.estado = null;
    },

    cargarLS() {
      let url = "http://127.0.0.1:3001/seguimiento";
      this.$axios
        .get(url)
        .then(respuesta => {
          this.lista_seguimientos = respuesta.data.map(x => {
            var f = Object.assign({}, x);
            f.fecha = x.fecha.slice(0, 10);
            return f;
          });
          this.cargada = true;
        })
        .catch(error => {
          console.log(error);
        });
    },

    cargarLSA() {
      let url = "http://127.0.0.1:3001/aplicacion";
      this.$axios
        .get(url)
        .then(respuesta => {
          this.lista_aplicaciones = respuesta.data.info;
          this.cargada1 = true;
        })
        .catch(error => {
          console.log(error);
        });
    },

    crearSeg() {
      let tr = this.seguimiento;
      let url = "http://127.0.0.1:3001/seguimiento";
      this.$axios
        .post(url, tr)
        .then(respuesta => {
          if (respuesta.data.ok == true) {
            alert("Seguimiento Guardado con Éxito");
          } else {
            alert("Error: " + respuesta.data.mensaje);
          }
          console.log(respuesta);
          
          this.cargarLS();
        })
        .catch(error => {});
      this.seguimiento = {
        id: "",
        id_aplicacion: "",
        fecha: "",
        comentario: "",
        estado: null,
        acciones: true
      };
    },

    eliminarSeg() {
      let id = this.seguimiento.id;
      let url = "http://127.0.0.1:3001/seguimiento/" + id;
      var confirmacion = confirm('¿Seguro que desea eliminar el seguimiento con el id ' +id + '?');
      if (confirmacion == true) {
        this.$axios
        .delete(url)
        .then(respuesta => {
          if (respuesta.data.rowCount != 0) {
            alert("Seguimiento Eliminado con Éxito");
          } else {
            alert("Seguimiento inexistente");
          }
          this.cargarLS();
        })
        .catch(error => {});
      }else {
        alert('La operación ha sido cancelada');
      }      
      this.seguimiento = {
        id: ""
      };
    },

    cargarSeg({ item }) {
      let aux = this.lista_seguimientos.find(
        seguimiento => seguimiento.id == item.id
      );
      this.enEdicion = true;
      this.seguimiento = Object.assign({}, aux);
      alert("Ahora Puedes Modificar el Seguimiento");
    },

    cargarId({ item }) {
      let aux = this.lista_aplicaciones.find(
        aplicacion => aplicacion.id == item.id
      );
      this.seguimiento.id_aplicacion = aux.id;
      alert("Ahora Puedes Realizar el Seguimiento");
    },

    actualizarSeg() {
      this.enEdicion = false;
      let id = this.seguimiento.id;
      let tr = this.seguimiento;
      let url = "http://127.0.0.1:3001/seguimiento/" + id;
      this.$axios
        .put(url, tr)
        .then(respuesta => {
          alert("Seguimiento Actualizado");
          this.cargarLS();
        })
        .catch(error => {});
      this.seguimiento = {
        id: "",
        id_aplicacion: "",
        fecha: "",
        comentario: "",
        estado: null,
        acciones: true
      };
    },

    cancelarEdicion(){
      this.seguimiento.id = "";
      this.seguimiento.id_aplicacion = "";
      this.seguimiento.fecha = "";
      this.seguimiento.comentario = "";
      this.seguimiento.estado = null;
      this.enEdicion = false;
    }
  }
};
