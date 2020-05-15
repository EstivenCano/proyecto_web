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
      fields2: ["id", "nombre", "apellido", "correo", "id_convenio"],
      seguimiento: {
        id: "",
        id_aplicacion: "",
        fecha: "",
        comentario: "",
        archivo: null,
        estado: null,
        acciones: true
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
      this.seguimiento.estado = "";
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
          this.cargarLS();
        })
        .catch(error => {});
      this.seguimiento = {
        id: "",
        id_aplicacion: "",
        fecha: "",
        comentario: "",
        estado: "",
        acciones: true
      };
    },

    eliminarSeg() {
      let id = this.seguimiento.id;
      let url = "http://127.0.0.1:3001/seguimiento/" + id;
      this.$axios
        .delete(url)
        .then(respuesta => {
          this.cargarLS();
        })
        .catch(error => {});
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
    },

    actualizarSeg() {
      this.enEdicion = false;
      let id = this.seguimiento.id;
      let tr = this.seguimiento;
      let url = "http://127.0.0.1:3001/seguimiento/" + id;
      this.$axios
        .put(url, tr)
        .then(respuesta => {})
        .catch(error => {});
      this.seguimiento = {
        id: "",
        id_aplicacion: "",
        fecha: "",
        comentario: "",
        estado: "",
        acciones: true
      };
    }
  }
};
