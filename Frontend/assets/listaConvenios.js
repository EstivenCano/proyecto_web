import Vue from "vue";
import VueCookies from "vue-cookies";
import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueSimpleAlert);
Vue.use(VueCookies);

export default {
  data() {
    return {
      cargada1: false,
      cargada2: false,
      cargada3: false,
      lista_convenios: [],
      fields1: [
        "id_propuesta",
        { key: "nombre", label: "Universidad" },
        "pais",
        "tipo_convenio",
        "descripcion_iniciativa",
        "beneficios",
        "acciones"
      ],
      fields2: [
        "id_propuesta",
        { key: "nombre", label: "Universidad" },
        "descripcion_iniciativa",
        "beneficios",
        "acciones"
      ],
      fields3: [
        "id_propuesta",
        "pais",
        "tipo_convenio",
        "descripcion_iniciativa",
        "beneficios",
        "acciones"
      ],
      convenio: {
        tipo_convenio: null,
        acciones: true
      },
      tipos_convenio: [
        {
          text: "Seleccione tipo de convenio",
          value: null
        },
        {
          text: "Estudio",
          value: "Estudio"
        },
        {
          text: "Idiomas",
          value: "Idiomas"
        },
        {
          text: "Deporte",
          value: "Deporte"
        }
      ],
      pais: {
        id: null,
        acciones: true
      },
      paises: [
        {
          text: "Seleccione país",
          value: null
        },
        {
          text: "Colombia",
          value: 52
        },
        {
          text: "Estados Unidos",
          value: 75
        },
        {
          text: "España",
          value: 73
        },
        {
          text: "México",
          value: 146
        },
        {
          text: "Australia",
          value: 16
        },
        {
          text: "Brasil",
          value: 33
        }
      ],
      entidad: {
        id: null,
        acciones: true
      },
      entidades: [
        {
          text: "Seleccione entidad",
          value: null
        },
        {
          text: "Universidad de Medellin",
          value: 1
        },
        {
          text: "Universidad Pontificia Bolivariana",
          value: 2
        },
        {
          text: "Universidad Eafit",
          value: 3
        }
      ],
      datosCorreo: {
        convenio: {},
        correos: ""
      },
      show: true
    };
  },
  methods: {
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
    },

    cargarLStipo() {
      let tipo = this.convenio.tipo_convenio;
      let url = "https://gestion-movilidad-api.herokuapp.com/listaConvenio/" + tipo;
      this.$axios
        .get(url)
        .then(respuesta => {
          this.lista_convenios = respuesta.data.info;
          for (let i = 0; i < this.lista_convenios.length; i++) {
            const aux = this.lista_convenios[i];
            switch (aux["pais"]) {
              case 52:
                this.lista_convenios[i]["pais"] = "Colombia";
                break;
              case 75:
                this.lista_convenios[i]["pais"] = "Estados Unidos";
                break;
              case 73:
                this.lista_convenios[i]["pais"] = "España";
                break;
              case 146:
                this.lista_convenios[i]["pais"] = "México";
                break;
              case 16:
                this.lista_convenios[i]["pais"] = "Australia";
                break;
              case 33:
                this.lista_convenios[i]["pais"] = "Brasil";
                break;
              default:
                break;
            }
          }
          this.cargada1 = true;
          this.cargada2 = false;
          this.cargada3 = false;
        })
        .catch(error => {
          console.log(error);
        });
    },

    cargarLSpais() {
      let pais = this.pais.id;
      let url = "https://gestion-movilidad-api.herokuapp.com/listaConvenioPais/" + pais;
      this.$axios
        .get(url)
        .then(respuesta => {
          this.lista_convenios = respuesta.data.info;
          this.cargada1 = false;
          this.cargada2 = true;
          this.cargada3 = false;
        })
        .catch(error => {
          console.log(error);
        });
    },

    cargarLSentidad() {
      let entidad = this.entidad.id;
      let url = "https://gestion-movilidad-api.herokuapp.com/listaConvenioEntidad/" + entidad;
      this.$axios
        .get(url)
        .then(respuesta => {
          this.lista_convenios = respuesta.data.info;
          for (let i = 0; i < this.lista_convenios.length; i++) {
            const aux = this.lista_convenios[i];
            switch (aux["pais"]) {
              case 52:
                this.lista_convenios[i]["pais"] = "Colombia";
                break;
              case 75:
                this.lista_convenios[i]["pais"] = "Estados Unidos";
                break;
              case 73:
                this.lista_convenios[i]["pais"] = "España";
                break;
              case 146:
                this.lista_convenios[i]["pais"] = "México";
                break;
              case 16:
                this.lista_convenios[i]["pais"] = "Australia";
                break;
              case 33:
                this.lista_convenios[i]["pais"] = "Brasil";
                break;
              default:
                break;
            }
          }
          this.cargada1 = false;
          this.cargada2 = false;
          this.cargada3 = true;
        })
        .catch(error => {
          console.log(error);
        });
    },

    cargarConvenio({ item }) {
      let aux = this.lista_convenios.find(convenio => convenio.id == item.id);
      this.convenio = Object.assign({}, aux);
    },
    lsDatosCorreo({ item }) {
      this.datosCorreo.convenio = item;
      this.$refs["my-modal"].show();
      console.log(this.datosCorreo.convenio);
    },

    enviarCorreo() {
      this.datosCorreo.correos = document.getElementById("correos").value;
      let url = "https://gestion-movilidad-api.herokuapp.com/divulgacion/correo";
      this.$axios
        .post(url, this.datosCorreo)
        .then(respuesta => {
          this.$fire({
            title: 'Exito!',
            text: 'La aplicación fue enviada a los correos indicados.',
            type: 'success',
            timer: 2500
          })
          //console.log(this.datosCorreo.correos);
        })
        .catch(error => {
          this.$fire({
            title: 'Error',
            text: 'No se pudo enviar la aplicación seleccionada',
            type: 'error',
            timer: 2500
          })
        });
    },

    ocultarModal() {
      this.$refs["my-modal"].hide();
    },

    enviarCookies({item}){

      this.$fire({
        title: "Convenio",
        text: "¿Desea aplicar para el convenio?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        reverseButtons: true
      }).then(r => {
        if (r.value) {
          
          this.$cookies.set('convenio',item);   
          window.open('https://gestion-movilidad-udem.herokuapp.com/aplicacion','_self')

        } else {
          this.$fire({
            title: 'Cancelada',
            text: 'La operación ha sido cancelada',
            type: 'error',
            timer: 3000
          })
        }
      });

    
    }

  }
};
