export default {
    data() {
      return {
        cargada: false,
        lista_convenios: [],
        fields: ["id", "tipo_convenio", "descripcion_iniciativa", "beneficios", "acciones"],
        convenio: {
          id: "",
          tipo_convenio: null,
          descripcion_iniciativa: "",
          beneficios: "",
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
        show: true
      };
    },
    methods: {
      onReset(evt) {
        evt.preventDefault();
        // Reset our form values
        this.convenio.id = "";
        this.convenio.tipo_convenio = "";
        this.convenio.descripcion_iniciativa = "";
        this.convenio.beneficios = "";
      },
  
      cargarLS() {
        let tipo = this.convenio.tipo_convenio;
        let url = "http://127.0.0.1:3001/listaConvenio/" + tipo;
        this.$axios
          .get(url)
          .then(respuesta => {
            this.lista_convenios = respuesta.data.info;
            this.cargada = true;
          })
          .catch(error => {
            console.log(error);
          });
      },
  
      cargarConvenio({ item }) {
        let aux = this.lista_convenios.find(convenio => convenio.id == item.id);
        this.convenio = Object.assign({}, aux);
      }
    }
  };
  