<template>
  <div>
    <!-- Card para delimitar el tamaño del formulario y centrarlo en la pagina -->
    <b-card>
      <!-- Centrar contenido -->
      <center>
        <!-- Titulo principal -->
        <h1 style="font-size:250%;">Formulario de aplicación a convenio</h1>
        <!-- Imagen decorativa sobre formularios -->
        <img
          src="https://cdn3.iconfinder.com/data/icons/20-business-flat-icons-shadow/96/75-512.png"
          fluid
          alt="Responsive image"
          height="150px"
          width="150px"
        />
      </center>

      <!-- Salto de linea -->
      <br />
      <!-- Linea divisora -->
      <hr />
      <br />

      <!-- Formulario con los parametros indicados -->
      <b-form action="javascript:void(0)" @submit="crearAplicacion" @reset="onReset" v-if="show">
        <!-- Opciones dentro del formulario -->
        <b-form-group
          id="input-group-1"
          label="Correo Electronico:"
          label-for="input-1"
          description="Este correo no sera compartido."
        >
          <b-form-input
            id="email"
            v-model="form.email"
            type="email"
            required
            placeholder="Ingresar correo"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
          <b-form-input 
          id="nombre" 
          v-model="form.name" required placeholder="Ingresar nombre">
          </b-form-input>
        </b-form-group>

        <b-form-group id="input-group-6" label="Documento de identidad:" label-for="input-6">
          <b-form-input
            id="id_usuario"
            v-model="form.id_usuario"
            required
            placeholder="Ingresar documento de identidad"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-5" label="Telefono:" label-for="input-5">
          <b-form-input
            id="telefono"
            v-model="form.telefono"
            required
            placeholder="Ingresar telefono"
          ></b-form-input>
        </b-form-group>
        <!-- b-form-select para los convenios disponibles -->
        <b-form-group id="input-group-3" label="Tipo convenio:" label-for="input-3">
          <b-form-select id="convenio" v-model="form.convenio" :options="convenios" required></b-form-select>
        </b-form-group>

        <!-- Botones agrupados -->
        <b-form-group id="input-group-4"></b-form-group>
        <b-button type="submit" variant="primary" v-if="!enEdicion">Aceptar</b-button>
        <b-button @click="actualizarAplicacion()" variant="primary" v-if="enEdicion">Actualizar</b-button>
        <b-button type="reset" variant="danger">Limpiar</b-button>
      </b-form>
      <b-card class="mt-3" header="Vista previa">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </b-card>

    <br />
    <center>
      <h3>Lista de aplicaciones</h3>
      <br />
      <!-- Boton para recargar la lista con los datos guardados en el LocalStorage -->
      <b-button @click="recargarAplicaciones()" variant="primary">Recargar aplicaciones</b-button>
    </center>
    <br />

    <!-- Tabla de aplicaciones -->
    <b-table striped hover :items="aplicaciones">
      <template v-slot:cell(acciones)="row">
        <!-- Botones para editar y eliminar aplicaciones de la lista -->
        <b-button size="sm" @click="cargarAplicacion(row)" class="mr-2">Modificar</b-button>
        <b-button size="sm" @click="eliminarAplicacion(row)" class="mr-2">Eliminar</b-button>
      </template>
    </b-table>
  </div>
</template>

<!-- Codigo .js para la pagina aplicacion.vue -->
<script>
export default {
  data() {
    return {
      /*Determina si la aplicacion se encuentra en estado de edicion*/
      enEdicion: false,
      /*Array de aplicaciones*/
      aplicaciones: [
        {
          id: "001",
          nombre: "Celeste",
          correo: "celeste@gmail.com",
          telefono: "351245",
          convenio: null,
          acciones: true
        }
      ],
      /*Objeto de aplicaciones*/
      aplicacion: {
        id: "",
        nombre: "",
        correo: "",
        telefono: "",
        convenio: null,
        acciones: true
      },
      /*Parametros de formulario*/
      form: {
        email: "",
        name: "",
        id_usuario: "",
        telefono: "",
        convenio: null
      },

      /*Opciones de convenio en la lista desplegable*/
      convenios: [
        { text: "Selecciona un convenio", value: null },
        "Movilidad",
        "Intercambio",
        "Proyecto de investigacion"
      ],
      show: true
    };
  },
  /*Metodos*/
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

      this.aplicaciones.push(this.aplicacion);
      /*Convierte el array aplicaciones en un JSON y lo almacena en el localStorage*/
      var jsonPerson = JSON.stringify(this.aplicaciones);
      localStorage.setItem("aplistorage", jsonPerson);
    },
    /*Busca la posicion del objeto dentro del array y lo elimina*/
    eliminarAplicacion({ item }) {
      let posicion = this.aplicaciones.findIndex(
        aplicacion => aplicacion.id == item.id
      );

      var personJSONFromLS = localStorage.getItem("aplistorage");
      var personFromLS = JSON.parse(personJSONFromLS);

      this.aplicaciones = personFromLS;

      this.aplicaciones.splice(posicion, 1);

      var jsonPerson = JSON.stringify(this.aplicaciones);
      localStorage.setItem("aplistorage", jsonPerson);

    },
    /*Llena los campos del formulario con los datos de la aplicacion para luego ser editados, segun la fila
    en que se encuentre*/
    cargarAplicacion({ item }) { 
      let apli = this.aplicaciones.find(aplicacion => aplicacion.id == item.id);
      this.aplicacion = Object.assign({}, apli);
      document.getElementById("id_usuario").value = apli.id;
      document.getElementById("email").value = apli.correo;
      document.getElementById("telefono").value = apli.telefono;
      document.getElementById("nombre").value = apli.nombre;
      document.getElementById("convenio").value = apli.convenio;
      /*Cambia el estado de edicion, para hacer visible el boton Actualizar*/
      this.enEdicion = true;
    },

    /*Toma la posicion de la aplicacion en el array y lo reemplaza por el objeto modificado*/
    actualizarAplicacion() {
      let posicion = this.aplicaciones.findIndex(
        aplicacion => aplicacion.id == this.aplicacion.id
      );

      var personJSONFromLS = localStorage.getItem("aplistorage");
      var personFromLS = JSON.parse(personJSONFromLS);
      this.aplicaciones = personFromLS;

      this.aplicaciones.splice(1, posicion);

      var jsonPerson = JSON.stringify(this.aplicaciones);
      localStorage.setItem("aplistorage", jsonPerson);

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
      this.enEdicion = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>