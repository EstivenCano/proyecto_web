import Vue from "vue";
import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueSimpleAlert);

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
      estados: [{
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
      let url = "https://gestion-movilidad-api.herokuapp.com/seguimiento";
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
      let url = "https://gestion-movilidad-api.herokuapp.com/aplicacion";
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
      let url = "https://gestion-movilidad-api.herokuapp.com/seguimiento";
      this.$axios
        .post(url, tr)
        .then(respuesta => {
          if (respuesta.data.ok == true) {
            this.$fire({
              title: 'Éxito!',
              text: 'El seguimiento ha sido guardado exitosamente.',
              type: 'success',
              timer: 2500
            })
          } else {
            this.$fire({
              title: 'Error',
              text: 'No ha sido posible crear el seguimiento.',
              type: 'error',
              timer: 2500
            })
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
      let url = "https://gestion-movilidad-api.herokuapp.com/seguimiento/" + id;

      this.$fire({
        title: "Precaución",
        text: "¿Desea eliminar el seguimiento?",
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
                this.$fire({
                  title: 'Éxito!',
                  text: 'Seguimiento eliminado exitosamente.',
                  type: 'success',
                  timer: 2500
                })
              } else {
                this.$fire({
                  title: 'Error',
                  text: 'Seguimiento inexistente.',
                  type: 'success',
                  timer: 2500
                })
              }
              this.cargarLS();
            })
            .catch(error => {});

        } else {

          this.$fire({
            title: 'Cancelada',
            text: 'La operación ha sido cancelada',
            type: 'error',
            timer: 2500
          })
        }

      });
      this.seguimiento = {
        id: ""
      };
    },

    cargarSeg({
      item
    }) {
      let aux = this.lista_seguimientos.find(
        seguimiento => seguimiento.id == item.id
      );
      this.enEdicion = true;
      this.seguimiento = Object.assign({}, aux);
      this.$fire({
        title: 'Modificación',
        text: 'Ahora puedes modificar el seguimiento',
        timer: 1500
      })
      
    },

    cargarId({
      item
    }) {
      let aux = this.lista_aplicaciones.find(
        aplicacion => aplicacion.id == item.id
      );
      this.seguimiento.id_aplicacion = aux.id;
      this.$fire({
        title: 'Cargar',
        text: 'Ahora puedes realizar el seguimiento',
        timer: 1500
      })
    },

    actualizarSeg() {
      this.enEdicion = false;
      let id = this.seguimiento.id;
      let tr = this.seguimiento;
      let url = "https://gestion-movilidad-api.herokuapp.com/seguimiento/" + id;
      this.$axios
        .put(url, tr)
        .then(respuesta => {
          this.$fire({
            title: 'Actualización',
            text: 'Seguimiento actualizado correctamente',
            type: 'success',
            timer: 2500
          })
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

    cancelarEdicion() {
      this.seguimiento.id = "";
      this.seguimiento.id_aplicacion = "";
      this.seguimiento.fecha = "";
      this.seguimiento.comentario = "";
      this.seguimiento.estado = null;
      this.enEdicion = false;
    }
  }
};
